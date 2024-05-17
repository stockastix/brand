import {ThemeProvider} from '@primer/react-brand'
import styles from './preview.module.css'
import '@primer/react-brand/lib/css/main.css' // '../../../packages/react/src/css/stylesheets'
// import '../../../packages/react/src/css/utilities.css' // already included by the previous line

export const globalTypes = {
  colorMode: {
    name: 'Color mode',
    description: 'Color mode (light, dark, auto, all)',
    defaultValue: 'light',
    toolbar: {
      icon: 'globe',
      // array of colorMode items
      items: [
        {
          value: 'light',
          title: 'Light',
        },
        {
          value: 'dark',
          title: 'Dark',
        },
        {
          value: 'auto',
          title: 'Auto',
        },
        {
          value: 'all',
          title: 'All',
        },
      ],
      title: true,
    },
  },
}

const ThemeProviderDecorator = (Story, context) => {
  // from Storybook v7, this can't be applied as a side effect
  if (context.globals.colorMode === 'auto') {
    document.body.removeAttribute('data-color-mode')
  }

  if (['light', 'dark'].includes(context.globals.colorMode)) {
    document.body.setAttribute('data-color-mode', context.globals.colorMode)
  }

  if (context && context.globals.colorMode === 'all') {
    return (
      <div className={styles['color-mode-all']}>
        <style
          dangerouslySetInnerHTML={{
            __html: `body { padding: 0 !important; }`,
          }}
        />
        <ThemeProvider colorMode="light">
          <Story {...context} />
        </ThemeProvider>
        <ThemeProvider colorMode="dark">
          <Story {...context} />
        </ThemeProvider>
      </div>
    )
  }

  return (
    <ThemeProvider colorMode={context.globals.colorMode}>
      <Story {...context} />
    </ThemeProvider>
  )
}

export const decorators = [ThemeProviderDecorator]

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
