"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  searchCommands,
  COMMAND_CENTER_OPEN_EVENT,
  KNOWLEDGE_ROUTE,
  focusKnowledgeEntity,
  type Command,
  type CommandCategory,
} from "@/data/knowledge";

const CATEGORY_ORDER: CommandCategory[] = [
  "NAVIGATION",
  "ACTIONS",
  "PROJECTS",
  "PUBLICATIONS",
  "MILESTONES",
];

const CATEGORY_LABELS: Record<CommandCategory, string> = {
  NAVIGATION: "NAVIGATION",
  ACTIONS: "ACTIONS",
  PROJECTS: "DEPLOYMENTS",
  PUBLICATIONS: "PUBLICATIONS",
  MILESTONES: "MILESTONES",
};

const FILTER_LABELS: Record<string, string> = {
  NAVIGATION: "Navigation",
  ACTIONS: "Actions",
  PROJECTS: "Deployments",
  PUBLICATIONS: "Publications",
  MILESTONES: "Milestones",
};

interface GroupedResult {
  category: CommandCategory;
  items: Command[];
}

export default function CommandCenter() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [filterCategories, setFilterCategories] = useState<
    CommandCategory[] | undefined
  >(undefined);
  const [selectionIndex, setSelectionIndex] = useState(0);
  const [notice, setNotice] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const optionRefs = useRef<Map<string, HTMLLIElement>>(new Map());

  const results: Command[] = useMemo(() => {
    if (query.trim().length > 0) {
      return searchCommands(query, filterCategories);
    }
    if (filterCategories) {
      return searchCommands("", filterCategories);
    }
    const defaultCategories: CommandCategory[] = ["NAVIGATION", "ACTIONS"];
    return searchCommands("", defaultCategories, 18);
  }, [query, filterCategories]);

  const groups: GroupedResult[] = useMemo(
    () =>
      CATEGORY_ORDER.map((category) => ({
        category,
        items: results.filter((command) => command.category === category),
      })).filter((group) => group.items.length > 0),
    [results]
  );

  const clampedIndex =
    results.length === 0
      ? -1
      : Math.min(selectionIndex, results.length - 1);
  const activeCommand = clampedIndex >= 0 ? results[clampedIndex] : undefined;

  const openPalette = useCallback(() => {
    previouslyFocused.current = document.activeElement as HTMLElement | null;
    setOpen(true);
    setQuery("");
    setFilterCategories(undefined);
    setSelectionIndex(0);
    setNotice(null);
  }, []);

  const closePalette = useCallback(() => {
    setOpen(false);
    previouslyFocused.current?.focus({ preventScroll: true });
    previouslyFocused.current = null;
  }, []);

  /* Global shortcut + open event */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (open) closePalette();
        else openPalette();
      }
    };
    const handleOpenEvent = () => openPalette();

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener(COMMAND_CENTER_OPEN_EVENT, handleOpenEvent);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener(COMMAND_CENTER_OPEN_EVENT, handleOpenEvent);
    };
  }, [open, openPalette, closePalette]);

  /* Scroll lock + focus input while the palette is open */
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const frame = requestAnimationFrame(() => inputRef.current?.focus());
    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const execute = useCallback(
    (command: Command) => {
      if (command.unavailableReason) {
        setNotice(command.unavailableReason);
        return;
      }
      if (command.filterCategories) {
        setFilterCategories(command.filterCategories);
        setQuery("");
        setSelectionIndex(0);
        setNotice(null);
        inputRef.current?.focus();
        return;
      }
      if (command.href) {
        const target = command.knowledgeEntityId
          ? `${KNOWLEDGE_ROUTE}?entity=${encodeURIComponent(
              command.knowledgeEntityId
            )}`
          : command.href;
        closePalette();
        if (command.external) {
          window.open(command.href, "_blank", "noopener,noreferrer");
        } else {
          router.push(target);
          if (command.knowledgeEntityId) {
            focusKnowledgeEntity(command.knowledgeEntityId);
          }
        }
      }
    },
    [router, closePalette]
  );

  const moveSelection = useCallback(
    (direction: 1 | -1) => {
      if (results.length === 0) return;
      const currentIndex =
        clampedIndex >= 0 ? clampedIndex : 0;
      setSelectionIndex(
        (currentIndex + direction + results.length) % results.length
      );
    },
    [results.length, clampedIndex]
  );

  /* Palette key handling (focus trap, escape, arrows, tab wrap) */
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closePalette();
        return;
      }
      if (event.key === "ArrowDown") {
        event.preventDefault();
        moveSelection(1);
        return;
      }
      if (event.key === "ArrowUp") {
        event.preventDefault();
        moveSelection(-1);
        return;
      }
      if (event.key === "Enter") {
        event.preventDefault();
        if (activeCommand) execute(activeCommand);
        return;
      }
      if (event.key === "Tab") {
        const panel = panelRef.current;
        if (!panel) return;
        const focusables = Array.from(
          panel.querySelectorAll<HTMLElement>(
            'input, button, [tabindex]:not([tabindex="-1"])'
          )
        ).filter((element) => !element.hasAttribute("disabled"));
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, closePalette, moveSelection, execute, activeCommand]);

  /* Keep active option scrolled into view */
  useEffect(() => {
    if (!activeCommand) return;
    const node = optionRefs.current.get(activeCommand.id);
    node?.scrollIntoView({ block: "nearest" });
  }, [activeCommand]);

  const isMac =
    typeof navigator !== "undefined" &&
    /mac|iphone|ipad/i.test(navigator.platform ?? navigator.userAgent ?? "");

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-20 sm:pt-[16vh]"
      role="presentation"
    >
      <div
        className="absolute inset-0 bg-background/70 backdrop-blur-sm"
        aria-hidden="true"
        onClick={closePalette}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Command center"
        className="command-palette relative w-full max-w-xl overflow-hidden animate-reveal [animation-duration:200ms]"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10">
          <span
            className="material-symbols-outlined text-primary text-[20px]"
            aria-hidden="true"
          >
            terminal
          </span>
          <label htmlFor="command-input" className="sr-only">
            Search commands and knowledge
          </label>
          <input
            id="command-input"
            ref={inputRef}
            type="text"
            role="combobox"
            aria-expanded="true"
            aria-controls="command-results"
            aria-activedescendant={
              activeCommand ? `command-option-${activeCommand.id}` : undefined
            }
            aria-autocomplete="list"
            autoComplete="off"
            spellCheck={false}
            placeholder={
              filterCategories
                ? "Type to refine search…"
                : "Search projects, research, missions…"
            }
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setSelectionIndex(0);
              setNotice(null);
            }}
            className="flex-1 bg-transparent font-mono text-sm text-on-background placeholder:text-on-surface-variant/50 outline-none border-none focus:outline-none"
          />
          {filterCategories && (
            <button
              type="button"
              onClick={() => {
                setFilterCategories(undefined);
                setQuery("");
                setSelectionIndex(0);
                inputRef.current?.focus();
              }}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-primary/40 bg-primary/10 font-mono text-[10px] uppercase tracking-wider text-primary hover:bg-primary/20 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-label={`Clear search filter: ${filterCategories
                .map((category) => FILTER_LABELS[category])
                .join(", ")}`}
            >
              <span>
                {filterCategories
                  .map((category) => FILTER_LABELS[category])
                  .join(" + ")}
              </span>
              <span
                className="material-symbols-outlined text-[12px]"
                aria-hidden="true"
              >
                close
              </span>
            </button>
          )}
        </div>

        {/* Results */}
        <div
          id="command-results"
          role="listbox"
          aria-label="Command results"
          data-lenis-prevent
          className="max-h-[50vh] sm:max-h-[46vh] overflow-y-auto py-2"
        >
          {groups.length === 0 ? (
            <div className="px-5 py-10 text-center">
              <p className="font-mono text-xs text-on-surface-variant uppercase tracking-widest">
                [ NO_MATCH_FOUND ]
              </p>
              <p className="font-mono text-mono-label text-on-surface-variant/60 mt-2">
                No records match this query in the knowledge index.
              </p>
            </div>
          ) : (
            groups.map((group) => (
              <div key={group.category} className="mb-2">
                <div className="px-5 pt-3 pb-1">
                  <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-[0.2em]">
                    {`// ${CATEGORY_LABELS[group.category]}`}
                  </span>
                </div>
                {group.items.map((command) => {
                  const selected = activeCommand?.id === command.id;
                  return (
                    <li
                      key={command.id}
                      id={`command-option-${command.id}`}
                      ref={(node) => {
                        if (node) optionRefs.current.set(command.id, node);
                        else optionRefs.current.delete(command.id);
                      }}
                      role="option"
                      aria-selected={selected}
                      aria-label={
                        command.unavailableReason
                          ? `${command.title} — unavailable`
                          : command.title
                      }
                      className="command-option list-none flex items-start justify-between gap-3 px-5 py-3 cursor-pointer"
                      onMouseEnter={() => {
                        const index = results.findIndex(
                          (option) => option.id === command.id
                        );
                        if (index >= 0) setSelectionIndex(index);
                      }}
                      onMouseDown={(event) => {
                        event.preventDefault();
                        execute(command);
                      }}
                      tabIndex={-1}
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-display text-sm text-on-background font-semibold truncate">
                            {command.title}
                          </span>
                          {command.unavailableReason && (
                            <span className="font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded border border-outline-variant/60 text-on-surface-variant whitespace-nowrap">
                              Unavailable
                            </span>
                          )}
                          {command.external && (
                            <span
                              className="material-symbols-outlined text-[12px] text-on-surface-variant"
                              aria-hidden="true"
                            >
                              open_in_new
                            </span>
                          )}
                        </div>
                        {command.description && (
                          <p className="font-mono text-mono-label text-on-surface-variant/70 truncate mt-0.5">
                            {command.description}
                          </p>
                        )}
                      </div>
                      <span
                        className="material-symbols-outlined text-[14px] text-on-surface-variant/40 mt-1"
                        aria-hidden="true"
                      >
                        {command.href && !command.external
                          ? "arrow_forward"
                          : command.external
                            ? "open_in_new"
                            : command.filterCategories
                              ? "filter_alt"
                              : "block"}
                      </span>
                    </li>
                  );
                })}
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-3 px-5 py-3 border-t border-white/10 bg-surface-container-lowest/60">
          {notice ? (
            <p
              className="font-mono text-[10px] text-error uppercase tracking-wider"
              role="status"
              aria-live="polite"
            >
              {notice}
            </p>
          ) : (
            <div className="flex items-center gap-3 font-mono text-[10px] text-on-surface-variant">
              <span className="hidden sm:flex items-center gap-1">
                <kbd className="kbd-hint">↑</kbd>
                <kbd className="kbd-hint">↓</kbd>
                <span className="ml-1">navigate</span>
              </span>
              <span className="flex items-center gap-1">
                <kbd className="kbd-hint">↵</kbd>
                <span className="ml-1">execute</span>
              </span>
              <span className="flex items-center gap-1">
                <kbd className="kbd-hint">esc</kbd>
                <span className="ml-1">close</span>
              </span>
            </div>
          )}
          <button
            type="button"
            onClick={closePalette}
            className="font-mono text-mono-label text-on-surface-variant hover:text-on-background transition-colors uppercase focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded"
            aria-label={`Close command center (${isMac ? "⌘K" : "Ctrl+K"})`}
          >
            {isMac ? "⌘K" : "Ctrl+K"}
          </button>
        </div>
      </div>
    </div>
  );
}
