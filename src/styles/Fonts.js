import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @font-face {
      font-family: 'Neue Haas Grotesk Display Pro';
      src: url('/fonts/NeueHaasDisplay-Mediu.eot');
      src: local('/fonts/NeueHaasDisplay-Mediu'),
          url('/fonts/NeueHaasDisplay-Mediu.eot?#iefix') format('embedded-opentype'),
          url('/fonts/NeueHaasDisplay-Mediu.woff2') format('woff2'),
          url('/fonts/NeueHaasDisplay-Mediu.woff') format('woff'),
          url('/fonts/NeueHaasDisplay-Mediu.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Neue Haas Grotesk Display Pro';
      src: url('/fonts/NeueHaasDisplay-RomanItalic.eot');
      src: local('/fonts/NeueHaasDisplay-RomanItalic'),
          url('/fonts/NeueHaasDisplay-RomanItalic.eot?#iefix') format('embedded-opentype'),
          url('/fonts/NeueHaasDisplay-RomanItalic.woff2') format('woff2'),
          url('/fonts/NeueHaasDisplay-RomanItalic.woff') format('woff'),
          url('/fonts/NeueHaasDisplay-RomanItalic.ttf') format('truetype');
      font-weight: 500;
      font-style: italic;
  }

  @font-face {
      font-family: 'Neue Haas Grotesk Display Pro';
      src: url('/fonts/NeueHaasDisplay-Black.eot');
      src: local('/fonts/NeueHaasDisplay-Black'),
          url('/fonts/NeueHaasDisplay-Black.eot?#iefix') format('embedded-opentype'),
          url('/fonts/NeueHaasDisplay-Black.woff2') format('woff2'),
          url('/fonts/NeueHaasDisplay-Black.woff') format('woff'),
          url('/fonts/NeueHaasDisplay-Black.ttf') format('truetype');
      font-weight: 900;
      font-style: normal;
  }

  @font-face {
      font-family: 'Neue Haas Grotesk Display Pro';
      src: url('/fonts/NeueHaasDisplay-MediumItalic.eot');
      src: local('/fonts/NeueHaasDisplay-MediumItalic'),
          url('/fonts/NeueHaasDisplay-MediumItalic.eot?#iefix') format('embedded-opentype'),
          url('/fonts/NeueHaasDisplay-MediumItalic.woff2') format('woff2'),
          url('/fonts/NeueHaasDisplay-MediumItalic.woff') format('woff'),
          url('/fonts/NeueHaasDisplay-MediumItalic.ttf') format('truetype');
      font-weight: 500;
      font-style: italic;
  }

  @font-face {
      font-family: 'Neue Haas Grotesk Display Pro';
      src: url('/fonts/NeueHaasDisplay-BlackItalic.eot');
      src: local('/fonts/NeueHaasDisplay-BlackItalic'),
          url('/fonts/NeueHaasDisplay-BlackItalic.eot?#iefix') format('embedded-opentype'),
          url('/fonts/NeueHaasDisplay-BlackItalic.woff2') format('woff2'),
          url('/fonts/NeueHaasDisplay-BlackItalic.woff') format('woff'),
          url('/fonts/NeueHaasDisplay-BlackItalic.ttf') format('truetype');
      font-weight: 900;
      font-style: italic;
  }

  @font-face {
      font-family: 'Neue Haas Grotesk Display Pro';
      src: url('/fonts/NeueHaasDisplay-Roman.eot');
      src: local('/fonts/NeueHaasDisplay-Roman'),
          url('/fonts/NeueHaasDisplay-Roman.eot?#iefix') format('embedded-opentype'),
          url('/fonts/NeueHaasDisplay-Roman.woff2') format('woff2'),
          url('/fonts/NeueHaasDisplay-Roman.woff') format('woff'),
          url('/fonts/NeueHaasDisplay-Roman.ttf') format('truetype');
      font-weight: 500;
      font-style: normal;
  }

  @font-face {
      font-family: 'Neue Haas Grotesk Display Pro';
      src: url('/fonts/NeueHaasDisplay-BoldItalic.eot');
      src: local('/fonts/NeueHaasDisplay-BoldItalic'),
          url('/fonts/NeueHaasDisplay-BoldItalic.eot?#iefix') format('embedded-opentype'),
          url('/fonts/NeueHaasDisplay-BoldItalic.woff2') format('woff2'),
          url('/fonts/NeueHaasDisplay-BoldItalic.woff') format('woff'),
          url('/fonts/NeueHaasDisplay-BoldItalic.ttf') format('truetype');
      font-weight: bold;
      font-style: italic;
  }

  @font-face {
      font-family: 'Neue Haas Grotesk Display Pro';
      src: url('/fonts/NeueHaasDisplay-LightItalic.eot');
      src: local('/fonts/NeueHaasDisplay-LightItalic'),
          url('/fonts/NeueHaasDisplay-LightItalic.eot?#iefix') format('embedded-opentype'),
          url('/fonts/NeueHaasDisplay-LightItalic.woff2') format('woff2'),
          url('/fonts/NeueHaasDisplay-LightItalic.woff') format('woff'),
          url('/fonts/NeueHaasDisplay-LightItalic.ttf') format('truetype');
      font-weight: 300;
      font-style: italic;
  }

  @font-face {
      font-family: 'Neue Haas Grotesk Display Pro';
      src: url('/fonts/NeueHaasDisplay-Bold.eot');
      src: local('/fonts/NeueHaasDisplay-Bold'),
          url('/fonts/NeueHaasDisplay-Bold.eot?#iefix') format('embedded-opentype'),
          url('/fonts/NeueHaasDisplay-Bold.woff2') format('woff2'),
          url('/fonts/NeueHaasDisplay-Bold.woff') format('woff'),
          url('/fonts/NeueHaasDisplay-Bold.ttf') format('truetype');
      font-weight: bold;
      font-style: normal;
  }

  @font-face {
      font-family: '/fonts/Neue Haas Grotesk Display Pro';
      src: url('/fonts/NeueHaasDisplay-Light.eot');
      src: local('/fonts/NeueHaasDisplay-Light'),
          url('/fonts/NeueHaasDisplay-Light.eot?#iefix') format('embedded-opentype'),
          url('/fonts/NeueHaasDisplay-Light.woff2') format('woff2'),
          url('/fonts/NeueHaasDisplay-Light.woff') format('woff'),
          url('/fonts/NeueHaasDisplay-Light.ttf') format('truetype');
      font-weight: 300;
      font-style: normal;
  }

  @font-face {
      font-family: 'Neue Haas Grotesk Display Pro';
      src: url('/fonts/NeueHaasDisplay-XXThin.eot');
      src: local('/fonts/NeueHaasDisplay-XXThin'),
          url('/fonts/NeueHaasDisplay-XXThin.eot?#iefix') format('embedded-opentype'),
          url('/fonts/NeueHaasDisplay-XXThin.woff2') format('woff2'),
          url('/fonts/NeueHaasDisplay-XXThin.woff') format('woff'),
          url('/fonts/NeueHaasDisplay-XXThin.ttf') format('truetype');
      font-weight: 100;
      font-style: normal;
  }

  @font-face {
      font-family: 'Neue Haas Grotesk Display Pro';
      src: url('/fonts/NeueHaasDisplay-XThinItalic.eot');
      src: local('/fonts/NeueHaasDisplay-XThinItalic'),
          url('/fonts/NeueHaasDisplay-XThinItalic.eot?#iefix') format('embedded-opentype'),
          url('/fonts/NeueHaasDisplay-XThinItalic.woff2') format('woff2'),
          url('/fonts/NeueHaasDisplay-XThinItalic.woff') format('woff'),
          url('/fonts/NeueHaasDisplay-XThinItalic.ttf') format('truetype');
      font-weight: 100;
      font-style: italic;
  }

  @font-face {
      font-family: 'Neue Haas Grotesk Display Pro';
      src: url('/fonts/NeueHaasDisplay-XXThinItalic.eot');
      src: local('/fonts/NeueHaasDisplay-XXThinItalic'),
          url('/fonts/NeueHaasDisplay-XXThinItalic.eot?#iefix') format('embedded-opentype'),
          url('/fonts/NeueHaasDisplay-XXThinItalic.woff2') format('woff2'),
          url('/fonts/NeueHaasDisplay-XXThinItalic.woff') format('woff'),
          url('/fonts/NeueHaasDisplay-XXThinItalic.ttf') format('truetype');
      font-weight: 100;
      font-style: italic;
  }

  @font-face {
      font-family: 'Neue Haas Grotesk Display Pro';
      src: url('/fonts/NeueHaasDisplay-XThin.eot');
      src: local('/fonts/NeueHaasDisplay-XThin'),
          url('/fonts/NeueHaasDisplay-XThin.eot?#iefix') format('embedded-opentype'),
          url('/fonts/NeueHaasDisplay-XThin.woff2') format('woff2'),
          url('/fonts/NeueHaasDisplay-XThin.woff') format('woff'),
          url('/fonts/NeueHaasDisplay-XThin.ttf') format('truetype');
      font-weight: 100;
      font-style: normal;
  }

  @font-face {
      font-family: 'Neue Haas Grotesk Display Pro';
      src: url('/fonts/NeueHaasDisplay-Thin.eot');
      src: local('/fonts/NeueHaasDisplay-Thin'),
          url('/fonts/NeueHaasDisplay-Thin.eot?#iefix') format('embedded-opentype'),
          url('/fonts/NeueHaasDisplay-Thin.woff2') format('woff2'),
          url('/fonts/NeueHaasDisplay-Thin.woff') format('woff'),
          url('/fonts/NeueHaasDisplay-Thin.ttf') format('truetype');
      font-weight: 100;
      font-style: normal;
  }

  @font-face {
      font-family: 'Neue Haas Grotesk Display Pro';
      src: url('/fonts/NeueHaasDisplay-ThinItalic.eot');
      src: local('/fonts/NeueHaasDisplay-ThinItalic'),
          url('/fonts/NeueHaasDisplay-ThinItalic.eot?#iefix') format('embedded-opentype'),
          url('/fonts/NeueHaasDisplay-ThinItalic.woff2') format('woff2'),
          url('/fonts/NeueHaasDisplay-ThinItalic.woff') format('woff'),
          url('/fonts/NeueHaasDisplay-ThinItalic.ttf') format('truetype');
      font-weight: 100;
      font-style: italic;
  }
`
