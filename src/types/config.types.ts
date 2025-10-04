import {
  BorderStyle,
  ChartMode,
  ChartVariant,
  NeutralColor,
  ScalingSize,
  Schemes,
  SolidStyle,
  SolidType,
  SurfaceStyle,
  Theme,
  TransitionStyle
} from '@once-ui-system/core'
import { NextFontWithVariable } from 'next/dist/compiled/@next/font'

/**
 * Display configuration for UI elements.
 */
export interface DisplayConfig {
  location: boolean
  time: boolean
  themeSwitcher: boolean
}

/**
 * Route configuration for enabled/disabled routes.
 */
export type RoutesConfig = Record<`/${string}`, boolean>

/**
 * Protected route configuration.
 */
export type ProtectedRoutesConfig = Record<`/${string}`, boolean>

/**
 * Font configuration for each variant.
 */
export interface FontsConfig {
  heading: NextFontWithVariable
  body: NextFontWithVariable
  label: NextFontWithVariable
  code: NextFontWithVariable
}

/**
 * Style customization for main layout.
 */
export interface StyleConfig {
  theme: Theme
  neutral: NeutralColor
  brand: Schemes
  accent: Schemes
  solid: SolidType
  solidStyle: SolidStyle
  border: BorderStyle
  surface: SurfaceStyle
  transition: TransitionStyle
  scaling: ScalingSize
}

/**
 * Data style configuration for charts.
 */
export interface DataStyleConfig {
  variant: ChartVariant
  mode: ChartMode
  height: number
  axis: {
    stroke: string
  }
  tick: {
    fill: string
    fontSize: number
    line: boolean
  }
}

/**
 * Effects configuration for UI visuals.
 */
export interface EffectsConfig {
  mask: {
    cursor: boolean
    x: number
    y: number
    radius: number
  }
  gradient: {
    display: boolean
    opacity: number
    x: number
    y: number
    width: number
    height: number
    tilt: number
    colorStart: string
    colorEnd: string
  }
  dots: {
    display: boolean
    opacity: number
    size: string
    color: string
  }
  grid: {
    display: boolean
    opacity: number
    color: string
    width: string
    height: string
  }
  lines: {
    display: boolean
    opacity: number
    color: string
    size: string
    thickness: number
    angle: number
  }
}

/**
 * Mailchimp configuration for newsletter forms.
 */
export interface MailchimpConfig {
  action: string
  effects: EffectsConfig
}

/**
 * Schema data for SEO/meta tags.
 */
export interface SchemaConfig {
  logo: string
  type: string
  name: string
  description: string
  email: string
}

/**
 * Social links for organization.
 */
export interface SameAsConfig {
  threads: string
  linkedin: string
  discord: string
}

/**
 * Social sharing configuration for blog posts.
 */
export interface SocialSharingConfig {
  display: boolean
  platforms: {
    x: boolean
    instagram: boolean
    linkedin: boolean
    facebook: boolean
    pinterest: boolean
    whatsapp: boolean
    reddit: boolean
    telegram: boolean
    email: boolean
    copyLink: boolean
  }
}

/**
 * Top-level config types for once-ui.config.js
 */
export interface OnceUIConfig {
  display: DisplayConfig
  mailchimp: MailchimpConfig
  routes: RoutesConfig
  protectedRoutes: ProtectedRoutesConfig
  baseURL: string
  fonts: FontsConfig
  style: StyleConfig
  schema: SchemaConfig
  sameAs: SameAsConfig
  socialSharing: SocialSharingConfig
  effects: EffectsConfig
  dataStyle: DataStyleConfig
}
