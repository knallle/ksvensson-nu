import Typography from "typography";
import theme from "typography-theme-kirkham";

theme.googleFonts = [
  {
    name: 'Open Sans',
    styles: ['700'],
  },
  {
    name: 'Merriweather',
    styles: ['300', '300i', '700', '700i'],
  },
];
theme.headerFontFamily = ['Open Sans', 'sans-serif'];
theme.bodyFontFamily = ['Merriweather', 'Georgia', 'serif'];
theme.baseFontSize = '14px'

theme.overrideThemeStyles = ({ rhythm }, options) => ({
  'a': {
    color: 'black',
  }
})

const typography = new Typography(theme);

export default typography;
