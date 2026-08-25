import { useRef } from "react";
import type { DepthLevel } from "@/data/knowledge";
import type { DepthLevelOption } from "@/data/depthContent";

interface TechnicalDepthSwitchProps {
  options: DepthLevelOption[];
  active: DepthLevel;
  onSelect: (level: DepthLevel) => void;
  panelId: string;
}

export default function TechnicalDepthSwitch({
  options,
  active,
  onSelect,
  panelId,
}: TechnicalDepthSwitchProps) {
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const enabledOptions = options
    .map((option, index) => ({ ...option, index }))
    .filter((option) => !option.disabled);

  const focusAndSelect = (index: number) => {
    const option = options[index];
    if (!option || option.disabled) return;
    onSelect(option.level);
    buttonRefs.current[index]?.focus();
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    switch (event.key) {
      case "ArrowRight":
        event.preventDefault();
        for (let offset = 1; offset <= options.length; offset++) {
          const target = (index + offset) % options.length;
          if (!options[target].disabled) {
            focusAndSelect(target);
            break;
          }
        }
        break;
      case "ArrowLeft":
        event.preventDefault();
        for (let offset = 1; offset <= options.length; offset++) {
          const target = (index - offset + options.length) % options.length;
          if (!options[target].disabled) {
            focusAndSelect(target);
            break;
          }
        }
        break;
      case "Home":
        event.preventDefault();
        if (enabledOptions.length) {
          focusAndSelect(enabledOptions[0].index);
        }
        break;
      case "End":
        event.preventDefault();
        if (enabledOptions.length) {
          focusAndSelect(enabledOptions[enabledOptions.length - 1].index);
        }
        break;
    }
  };

  return (
    <div
      role="tablist"
      aria-label="Content depth"
      className="inline-flex w-full sm:w-auto flex-col sm:flex-row gap-1 rounded-xl border border-white/10 bg-surface/60 backdrop-blur-md p-1"
    >
      {options.map((option, index) => {
        const isActive = option.level === active && !option.disabled;
        return (
          <button
            key={option.level}
            ref={(element) => {
              buttonRefs.current[index] = element;
            }}
            type="button"
            role="tab"
            id={`depth-tab-${option.level}`}
            aria-selected={isActive}
            aria-disabled={option.disabled || undefined}
            aria-controls={panelId}
            tabIndex={isActive ? 0 : -1}
            onClick={() => {
              if (!option.disabled) onSelect(option.level);
            }}
            onKeyDown={(event) => handleKeyDown(event, index)}
            className={[
              "group flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2 rounded-lg px-4 py-2.5 text-left font-mono uppercase tracking-wider transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
              isActive
                ? "bg-primary text-white shadow-[0_0_20px_rgba(15,98,254,0.35)]"
                : option.disabled
                  ? "text-on-surface-variant/40 cursor-not-allowed"
                  : "text-on-surface hover:bg-white/5 hover:text-on-background",
            ].join(" ")}
          >
            <span className="text-xs font-semibold leading-none">
              {option.label}
            </span>
            <span
              className={[
                "text-[9px] leading-none tracking-[0.2em]",
                isActive
                  ? "text-white/70"
                  : option.disabled
                    ? "text-on-surface-variant/30"
                    : "text-on-surface-variant/70",
              ].join(" ")}
            >
              {option.descriptor}
            </span>
          </button>
        );
      })}
    </div>
  );
}