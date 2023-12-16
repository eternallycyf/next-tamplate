import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  shortcuts: [],
  theme: {
    colors: {},
    fontFamily: {
      code: 'FiraCode',
      mone: 'OperatorMono',
      moneItalic: 'OperatorMonoItalic',
    },
  },
  presets: [
    presetUno({
      dark: 'media',
    }),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetTypography(),
    presetWebFonts({}),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  rules: [
    [/^m-([\.\d]+)$/, ([_, num]) => ({ margin: `${num}px` })],
    [/^p-([\.\d]+)$/, ([_, num]) => ({ padding: `${num}px` })],
  ],
});
