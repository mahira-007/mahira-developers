/**
 * PathParser - Parse and animate elements along SVG paths
 *
 * Handles:
 * - CSS selector to existing <path> element
 * - Direct Element reference
 * - Raw SVG path data string (starting with M/m)
 * - Position and angle calculation along path
 * - Alignment offset calculation
 */
/**
 * Point on a path with position and angle
 */
export interface PathPoint {
    x: number;
    y: number;
    angle: number;
}
/**
 * Parsed path data ready for animation
 */
export interface ParsedPathData {
    pathData: string;
    length: number;
}
/**
 * Check if a string is raw SVG path data (starts with M or m command)
 */
export declare function isPathData(value: string): boolean;
/**
 * Resolve path target to path data string
 *
 * @param target - CSS selector, Element, or raw path data
 * @returns Path data string or null if not found
 */
export declare function resolvePathData(target: string | Element): string | null;
/**
 * Get the total length of a path
 * Results are cached per path data string
 */
export declare function getPathLength(pathData: string): number;
/**
 * Clear the path length cache
 * Call when path data changes dynamically
 */
export declare function clearPathLengthCache(): void;
/**
 * Get a point on the path at a given progress (0-1)
 *
 * @param pathData - SVG path data string
 * @param progress - Position on path (0-1)
 * @param calculateAngle - Whether to calculate rotation angle
 * @returns Point with x, y, and angle
 */
export declare function getPointAtProgress(pathData: string, progress: number, calculateAngle?: boolean): PathPoint;
/**
 * Calculate the offset for the animated element itself
 * This is used to position the element's center (or specified origin) on the path
 *
 * @param element - The element being animated (selector, Element, or undefined)
 * @param alignAt - Origin point as [x%, y%], default [50, 50] (center)
 * @returns Offset to subtract from path position
 */
export declare function calculateElementOffset(element: string | Element | undefined, alignAt?: [number, number]): {
    x: number;
    y: number;
};
/**
 * Resolve the user-unit -> screen-pixel scale of an SVG path target.
 *
 * A `<path>` inside an `<svg viewBox="0 0 227 1358">` that renders 400px wide is
 * scaled ~1.76x on X: its `d` coordinates are in viewBox user units, not CSS px.
 * `getPointAtLength` returns user units, so an HTML element translated by those
 * raw values drifts off the visible line. This returns the per-axis scale so the
 * sampled trajectory can be converted into the same pixel space the path renders
 * in (mirrors what GSAP's MotionPathPlugin did via the path's CTM).
 *
 * Raw path-data strings and off-DOM targets have no rendered geometry, so they
 * return {1, 1} (no scaling — unchanged legacy behavior).
 *
 * @param target - The path `target` (CSS selector, Element, or raw "d" string)
 * @returns Per-axis scale factor; {x:1, y:1} when not an on-DOM SVG element
 */
export declare function resolvePathScreenScale(target: string | Element): {
    x: number;
    y: number;
};
/**
 * Calculate offset to position path relative to an align element
 * The path's first point (M command) will be positioned at the align element's center
 *
 * @param align - Element or selector to align the path to
 * @param pathData - SVG path data string
 * @param animatedElement - The element being animated (to calculate relative offset)
 * @param pathScale - User-unit -> screen-px scale applied to the path's first point
 * @returns Offset to add to path coordinates
 */
export declare function calculatePathAlignOffset(align: string | Element | undefined, pathData: string, animatedElement?: Element, pathScale?: {
    x: number;
    y: number;
}): {
    x: number;
    y: number;
};
/**
 * Parse a path configuration and prepare it for animation
 */
export declare function parsePath(target: string | Element, align?: string | Element, alignAt?: [number, number]): ParsedPathData | null;
/**
 * Cleanup function - removes hidden SVG from DOM
 * Call when SDK is destroyed or for testing cleanup
 */
export declare function cleanupPathParser(): void;
