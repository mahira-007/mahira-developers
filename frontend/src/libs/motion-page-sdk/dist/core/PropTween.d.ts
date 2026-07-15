/**
 * PropTween - Individual property interpolation unit
 *
 * Linked list node for animating a single property.
 * Pooled for performance.
 * Supports scalar values, color (RGBA), and filter interpolation.
 */
import type { AnimationTarget } from '../types';
import type { ParsedFilterFunction } from '../utils/FilterParser';
import type { ParsedDrawSVG } from '../utils/DrawSVGParser';
import type { ParsedClipPath } from '../utils/ClipPathParser';
import { type PathPoint } from '../utils/PathParser';
type PropTweenValueType = 'scalar' | 'string' | 'color' | 'filter' | 'drawSVG' | 'path' | 'clipPath';
export declare class PropTween {
    target: AnimationTarget | null;
    property: string;
    startValue: number;
    endValue: number;
    change: number;
    unit: string;
    startUnit: string | null;
    endUnit: string | null;
    next: PropTween | null;
    valueType: PropTweenValueType;
    startString: string;
    endString: string;
    startColor: Float32Array | null;
    endColor: Float32Array | null;
    changeColor: Float32Array;
    startFilters: ParsedFilterFunction[] | null;
    endFilters: ParsedFilterFunction[] | null;
    startDraw: ParsedDrawSVG | null;
    endDraw: ParsedDrawSVG | null;
    pathLength: number;
    startClipPath: ParsedClipPath | null;
    endClipPath: ParsedClipPath | null;
    pathData: string | null;
    motionPathLength: number;
    startProgress: number;
    endProgress: number;
    pathRotate: boolean;
    alignOffset: {
        x: number;
        y: number;
    } | null;
    pathOffset: {
        x: number;
        y: number;
    } | null;
    pathLUT: PathPoint[] | null;
    pathAlignTarget: string | Element | null;
    pathAlignAt: [number, number] | null;
    pathTarget: string | Element | null;
    pathScaleX: number;
    pathScaleY: number;
    private _isElement;
    private _pathGeomResolved;
    /**
     * Initialize the PropTween with scalar values
     */
    init(target: AnimationTarget, property: string, startValue: number, endValue: number, unit?: string, startUnit?: string, endUnit?: string): this;
    /**
     * Initialize the PropTween with a compound CSS string value
     * (transform-origin, background-position, …).
     */
    initString(target: AnimationTarget, property: string, startString: string, endString: string): this;
    /**
     * Initialize the PropTween with color values
     */
    initColor(target: AnimationTarget, property: string, startColor: Float32Array, endColor: Float32Array): this;
    /**
     * Initialize the PropTween with filter values
     */
    initFilter(target: AnimationTarget, property: string, startFilters: ParsedFilterFunction[], endFilters: ParsedFilterFunction[]): this;
    /**
     * Initialize the PropTween with clip-path values
     */
    initClipPath(target: AnimationTarget, property: string, startClipPath: ParsedClipPath, endClipPath: ParsedClipPath): this;
    /**
     * Initialize the PropTween with drawSVG values
     */
    initDrawSVG(target: AnimationTarget, property: string, startDraw: ParsedDrawSVG, endDraw: ParsedDrawSVG, pathLength: number): this;
    /**
     * Initialize the PropTween with path (motion path) values
     * Pre-samples the path into a lookup table for O(1) rendering
     */
    initPath(target: AnimationTarget, property: string, pathData: string, pathLength: number, startProgress: number, endProgress: number, rotate: boolean, alignOffset: {
        x: number;
        y: number;
    }, pathOffset: {
        x: number;
        y: number;
    }, pathScale?: {
        x: number;
        y: number;
    }, alignTarget?: string | Element, alignAt?: [number, number], pathTarget?: string | Element): this;
    /**
     * Sample the path into the lookup table at the given user-unit -> screen-px scale.
     * Releases any previously-held LUT back to the pool before re-sampling.
     */
    private _buildPathLUT;
    /**
     * Resolve the geometry-dependent path offsets (alignOffset/pathOffset/pathScale)
     * against the live, laid-out element.
     *
     * The offsets are first computed at parse time, but a target sized asynchronously
     * (Lottie injecting its <svg>, lazy-loaded <img>, web-font reflow) can report a
     * 0×0 / 0-height box then. That bakes `alignOffset = {x: w/2, y: 0}` — anchoring
     * the element by its TOP edge instead of its CENTER — which is invisible on the
     * straight runs of a path but drifts the element off curves (where it rotates).
     *
     * We therefore defer: each frame until the element has a real (non-degenerate)
     * box, recompute from the live geometry, then lock in. Once resolved there is no
     * per-frame cost. Only aligned DOM-element motion paths participate; raw path-data
     * or plain-object targets keep their parse-time values unchanged.
     */
    private _resolvePathGeometryIfNeeded;
    /**
     * Mark the path geometry stale so it re-resolves on the next render. Called when
     * layout may have shifted (window.load / resize ScrollTrigger refresh).
     */
    invalidatePathGeometry(): void;
    /**
     * Render the property at given progress (0-1)
     */
    render(progress: number): void;
    /**
     * Reset for object pooling
     */
    reset(): void;
}
export {};
