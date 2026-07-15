/**
 * CursorTrigger - Custom cursor controller
 *
 * Features:
 * - Smooth position tracking with configurable lag
 * - State-based animations (default, hover, click)
 * - Velocity-based squeeze effect
 * - Text and media cursor variants
 */
import type { CursorConfig } from '../types';
import { Timeline } from '../core/Timeline';
import { BaseTrigger } from './BaseTrigger';
type CursorState = 'default' | 'hover' | 'click';
export declare class CursorTrigger extends BaseTrigger<CursorConfig> {
    private _element;
    private _innerElement;
    private _mousePos;
    private _cursorPos;
    private _xSetter;
    private _ySetter;
    private _squeezeSetter;
    private _squeezeConfig;
    private _state;
    private _stateTimelines;
    private _parsedStates;
    private _textElement;
    private _mediaElement;
    private _tickerCallback?;
    private _boundMouseMove?;
    private _boundMouseDown?;
    private _boundMouseUp?;
    private _pointerMoveTarget;
    private _hoverSelectors;
    private _isHoveringCursorTarget;
    private _boundHoverTargetMoveHandler;
    private _hoverPointerMoveTarget;
    private _boundTextAttributeMoveHandler;
    private _textPointerMoveTarget;
    private _activeTextAttributeElement;
    private _hasTextAttributeElements;
    private _textAttributeObserver;
    private _textAttributeObserverActive;
    private _cursorStyleTag;
    private _attributeListeners;
    constructor(timeline: Timeline, config: CursorConfig);
    private _parseStateConfig;
    /**
     * Set up the cursor: create container, create setters, attach listeners, start ticker.
     *
     * Architecture (mirrors original GSAP cursor):
     * - Container (_element): position:fixed, zero-size, moved via x/y QuickSetters
     * - Inner element (_innerElement): centered via translate(-50%, -50%),
     *   receives all visual CSS properties and state transitions
     */
    protected _onEnable(): void;
    /**
     * Tear down the cursor: remove ticker, restore native cursor, remove listeners.
     */
    protected _onDisable(): void;
    /**
     * Create the cursor container element and append it to document.body.
     * The SDK always owns this container; it is removed in _onDisable().
     */
    private _createContainer;
    private _applyProperties;
    private _createStateTimelines;
    /**
     * Expand CSS transform shorthand in state properties into individual
     * SDK transform properties that the animation system can interpolate.
     * E.g., {transform: 'scale(2)', width: '80px'} → {scale: 2, width: '80px'}
     */
    private static _expandStateProperties;
    /**
     * Parse CSS transform shorthand string into individual SDK transform properties.
     * Handles: scale, scaleX/Y, rotate, rotateX/Y/Z, skewX/Y
     * E.g., "scale(2)" → {scale: 2}
     *       "scale(2, 3)" → {scaleX: 2, scaleY: 3}
     *       "scale(2) rotate(45deg)" → {scale: 2, rotate: 45}
     */
    private static _expandTransformShorthand;
    private _setupEventListeners;
    private _setupHoverTargets;
    private _setupTextCursor;
    private _setupTextAttributeHitTesting;
    /** Recompute whether any tooltip/text attribute elements currently exist. */
    private _updateHasTextAttributeElements;
    /**
     * Watch the DOM for tooltip/text attribute elements being added, removed, or
     * toggled so the hit-test fast path stays correct without polling. The
     * callback only runs a single querySelector per mutation batch — far cheaper
     * than an elementsFromPoint call on every pointer-move frame.
     */
    private _observeTextAttributeElements;
    private _findTextAttributeTarget;
    private _showTextCursor;
    /**
     * Drop the cursor back to its default state only when neither hover source is
     * active. Both the hover-selector hit-test and the text-attribute hit-test can
     * hold the 'hover' state; releasing requires both to be inactive so the two
     * handlers don't fight each other across pointer-move frames. The `'hover'`
     * guard preserves an in-progress 'click' state.
     */
    private _releaseHoverIfInactive;
    private _hideTextCursor;
    private _setupMediaCursor;
    private _removeEventListeners;
    private _setState;
    private _tick;
    private _calculateSqueeze;
    /**
     * Get the cursor element
     */
    getElement(): HTMLElement | null;
    /**
     * Get current state
     */
    getState(): CursorState;
}
export {};
