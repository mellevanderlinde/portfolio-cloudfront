'use client'
import type { TargetAndTransition, Transition, Variant, Variants } from 'motion/react'
import type { ReactNode } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { memo } from 'react'
import { cn } from '@/lib/utils'

type PresetType = 'blur' | 'fade-in-blur' | 'scale' | 'fade' | 'slide'

type PerType = 'word' | 'char' | 'line'

interface TextEffectProps {
  children: string
  per?: PerType
  as?: keyof React.JSX.IntrinsicElements
  variants?: {
    container?: Variants
    item?: Variants
  }
  className?: string
  preset?: PresetType
  delay?: number
  speedReveal?: number
  speedSegment?: number
  trigger?: boolean
  onAnimationComplete?: () => void
  onAnimationStart?: () => void
  segmentWrapperClassName?: string
  containerTransition?: Transition
  segmentTransition?: Transition
  style?: React.CSSProperties
}

const defaultStaggerTimes: Record<PerType, number> = {
  char: 0.03,
  line: 0.1,
  word: 0.05,
}

const defaultContainerVariants: Variants = {
  exit: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const presetVariants: Record<
  PresetType,
  { container: Variants, item: Variants }
> = {
  'blur': {
    container: defaultContainerVariants,
    item: {
      exit: { filter: 'blur(12px)', opacity: 0 },
      hidden: { filter: 'blur(12px)', opacity: 0 },
      visible: { filter: 'blur(0px)', opacity: 1 },
    },
  },
  'fade': {
    container: defaultContainerVariants,
    item: {
      exit: { opacity: 0 },
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
  },
  'fade-in-blur': {
    container: defaultContainerVariants,
    item: {
      exit: { filter: 'blur(12px)', opacity: 0, y: 20 },
      hidden: { filter: 'blur(12px)', opacity: 0, y: 20 },
      visible: { filter: 'blur(0px)', opacity: 1, y: 0 },
    },
  },
  'scale': {
    container: defaultContainerVariants,
    item: {
      exit: { opacity: 0, scale: 0 },
      hidden: { opacity: 0, scale: 0 },
      visible: { opacity: 1, scale: 1 },
    },
  },
  'slide': {
    container: defaultContainerVariants,
    item: {
      exit: { opacity: 0, y: 20 },
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
  },
}

const AnimationComponent: React.FC<{
  segment: string
  variants: Variants
  per: 'line' | 'word' | 'char'
  segmentWrapperClassName?: string
}> = memo(({ per, segment, segmentWrapperClassName, variants }) => {
  const content
    = per === 'line'
      ? (
          <motion.span variants={variants} className="block">
            {segment}
          </motion.span>
        )
      : per === 'word'
        ? (
            <motion.span
              aria-hidden="true"
              variants={variants}
              className="inline-block whitespace-pre"
            >
              {segment}
            </motion.span>
          )
        : (
            <motion.span className="inline-block whitespace-pre">
              {segment.split('').map((char, charIndex) => (
                <motion.span
                  key={`char-${charIndex}`}
                  aria-hidden="true"
                  variants={variants}
                  className="inline-block whitespace-pre"
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
          )

  if (!segmentWrapperClassName) {
    return content
  }

  const defaultWrapperClassName = per === 'line' ? 'block' : 'inline-block'

  return (
    <span className={cn(defaultWrapperClassName, segmentWrapperClassName)}>
      {content}
    </span>
  )
})

AnimationComponent.displayName = 'AnimationComponent'

function splitText(text: string, per: 'line' | 'word' | 'char'): string[] {
  if (per === 'line') {
    return text.split('\n')
  }
  return text.split(/(\s+)/)
}

function hasTransition(variant: Variant): variant is TargetAndTransition & { transition?: Transition } {
  return typeof variant === 'object' && 'transition' in variant
}

function createVariantsWithTransition(baseVariants: Variants, transition?: Transition & { exit?: Transition }): Variants {
  if (!transition) {
    return baseVariants
  }

  const { exit: _, ...mainTransition } = transition

  return {
    ...baseVariants,
    exit: {
      ...baseVariants.exit,
      transition: {
        ...(hasTransition(baseVariants.exit)
          ? baseVariants.exit.transition
          : {}),
        ...mainTransition,
        staggerDirection: -1,
      },
    },
    visible: {
      ...baseVariants.visible,
      transition: {
        ...(hasTransition(baseVariants.visible)
          ? baseVariants.visible.transition
          : {}),
        ...mainTransition,
      },
    },
  }
}

export function TextEffect({
  as = 'p',
  children,
  className,
  containerTransition,
  delay = 0,
  onAnimationComplete,
  onAnimationStart,
  per = 'word',
  preset = 'fade',
  segmentTransition,
  segmentWrapperClassName,
  speedReveal = 1,
  speedSegment = 1,
  style,
  trigger = true,
  variants,
}: TextEffectProps): ReactNode {
  const segments = splitText(children, per)
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div

  const baseVariants = presetVariants[preset]
  const stagger = defaultStaggerTimes[per] / speedReveal
  const baseDuration = 0.3 / speedSegment

  const customStagger = hasTransition(variants?.container?.visible ?? {})
    ? (variants?.container?.visible as TargetAndTransition).transition?.staggerChildren
    : undefined

  const customDelay = hasTransition(variants?.container?.visible ?? {})
    ? (variants?.container?.visible as TargetAndTransition).transition?.delayChildren
    : undefined

  const computedVariants = {
    container: createVariantsWithTransition(
      variants?.container || baseVariants.container,
      {
        delayChildren: customDelay ?? delay,
        staggerChildren: customStagger ?? stagger,
        ...containerTransition,
        exit: {
          staggerChildren: customStagger ?? stagger,
          staggerDirection: -1,
        },
      },
    ),
    item: createVariantsWithTransition(variants?.item || baseVariants.item, {
      duration: baseDuration,
      ...segmentTransition,
    }),
  }

  return (
    <AnimatePresence mode="popLayout">
      {trigger && (
        <MotionTag
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={computedVariants.container}
          className={className}
          onAnimationComplete={onAnimationComplete}
          onAnimationStart={onAnimationStart}
          style={style}
        >
          {per === 'line' ? null : <span className="sr-only">{children}</span>}
          {segments.map(segment => (
            <AnimationComponent
              key={`${per}-${segment}`}
              segment={segment}
              variants={computedVariants.item}
              per={per}
              segmentWrapperClassName={segmentWrapperClassName}
            />
          ))}
        </MotionTag>
      )}
    </AnimatePresence>
  )
}
