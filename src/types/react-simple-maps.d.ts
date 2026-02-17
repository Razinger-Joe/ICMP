declare module "react-simple-maps" {
    import * as React from "react";

    export interface ComposableMapProps {
        projection?: string | ((width: number, height: number) => any);
        projectionConfig?: any;
        className?: string;
        style?: any;
        children?: React.ReactNode;
        width?: number;
        height?: number;
    }

    export const ComposableMap: React.FC<ComposableMapProps>;

    export interface GeographiesProps {
        geography?: string | Record<string, any> | string[];
        children?: (args: { geographies: any[]; projection: any; path: any }) => React.ReactNode;
        parseGeographies?: (geographies: any[]) => any[];
    }

    export const Geographies: React.FC<GeographiesProps>;

    export interface GeographyProps {
        geography?: any;
        fill?: string;
        stroke?: string;
        strokeWidth?: number | string;
        style?: any;
        onClick?: (event: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
        onMouseEnter?: (event: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
        onMouseLeave?: (event: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
        onMouseDown?: (event: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
        onMouseUp?: (event: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
        onFocus?: (event: React.FocusEvent<SVGPathElement>) => void;
        onBlur?: (event: React.FocusEvent<SVGPathElement>) => void;
        key?: string | number;
    }

    export const Geography: React.FC<GeographyProps>;

    export interface MarkerProps {
        coordinates?: [number, number];
        children?: React.ReactNode;
        style?: any;
        key?: string | number;
    }

    export const Marker: React.FC<MarkerProps>;

    export interface LineProps {
        from?: [number, number];
        to?: [number, number];
        coordinates?: [number, number][];
        stroke?: string;
        strokeWidth?: number | string;
        strokeLinecap?: string;
        className?: string;
        style?: any;
        key?: string | number;
    }

    export const Line: React.FC<LineProps>;

    export interface AnnotationProps {
        subject?: [number, number];
        dx?: number;
        dy?: number;
        curve?: number;
        connectorProps?: any;
        children?: React.ReactNode;
    }

    export const Annotation: React.FC<AnnotationProps>;
}
