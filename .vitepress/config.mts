import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: './content', 
  base: '/',
  head: [
    [
      'link',
      { rel: 'stylesheet', href: 'https://use.typekit.net/zfp0qhw.css' }
    ]
  ],
  title: "Lehrbuch | EspaceSuisse",
  description: "Lerne Raumplanung auf die Einfache Art",
  locales: {
    root: {
      label: 'Deutsch',
      lang: 'de-CH',
      themeConfig: {
        nav: [
          { text: 'Startseite', link: '/' }
        ],
        sidebar: [
          {
            text: 'Grundlagen',
            items: [
              { text: '1. Die Resource Boden', link: '/1-resource-boden' },
              { text: '2. Die Gesetzgebung', link: '/2-gesetzgebung' },
              { text: '3. Ziele & Grundsätze', link: '/3-ziele-grundsaetze' },
            ]
          },
          {
            text: 'Planungsebenen',
            items: [
              { text: '4. Bundesplanung', link: '/4-bundesplanung' },
              { text: '5. Kantonale Planung', link: '/5-kantonale-planung' },
              { text: '6. Funktionale Räume', link: '/6-funktionale-raeume' },
              { text: '7. Kommunale Planung', link: '/7-kommunale-planung' },
            ]
          },
          {
            text: 'Bewilligungen & Massnahmen',
            items: [
              { text: '8. Baubewilligung', link: '/8-baubewilligung' },
              { text: '9. BABZ', link: '/9-babz' },
              { text: '10. Ausgleich Vor & Nachteile', link: '/10-ausgleich-vor-nachteile' },
            ]
          },
          {
            text: 'Umwelt & Schutz',
            items: [
              { text: '11. Lärm & Umwelt', link: '/11-laerm-umwelt' },
              { text: '12. Natur und Heimatschutz', link: '/12-natur-heimatschutz' },
              { text: '13. Wald', link: '/13-wald' },
            ]
          },
          {
            text: 'Infrastruktur',
            items: [
              { text: '14. Verkehr', link: '/14-verkehr' },
            ]
          }
        ]
      }
    },
    fr: {
      label: 'Français',
      lang: 'fr-CH',
      themeConfig: {
        nav: [
          { text: 'Accueil', link: '/fr/' }
        ],
        sidebar: [
          {
            text: 'Fondamentaux',
            items: [
              { text: '1. La ressource sol', link: '/1-resource-boden' },
              { text: '2. La législation', link: '/2-gesetzgebung' },
              { text: '3. Objectifs & Principes', link: '/3-ziele-grundsaetze' },
            ]
          },
          {
            text: 'Niveaux de planification',
            items: [
              { text: '4. Planification fédérale', link: '/4-bundesplanung' },
              { text: '5. Planification cantonale', link: '/5-kantonale-planung' },
              { text: '6. Espaces fonctionnels', link: '/6-funktionale-raeume' },
              { text: '7. Planification communale', link: '/7-kommunale-planung' },
            ]
          },
          {
            text: 'Permis & Mesures',
            items: [
              { text: '8. Autorisation de construire', link: '/8-baubewilligung' },
              { text: '9. BABZ', link: '/9-babz' },
              { text: '10. Compensation Avantages & Inconvénients', link: '/10-ausgleich-vor-nachteile' },
            ]
          },
          {
            text: 'Environnement & Protection',
            items: [
              { text: '11. Bruit & Environnement', link: '/11-laerm-umwelt' },
              { text: '12. Protection de la nature et du patrimoine', link: '/12-natur-heimatschutz' },
              { text: '13. Forêt', link: '/13-wald' },
            ]
          },
          {
            text: 'Infrastructure',
            items: [
              { text: '14. Transports', link: '/14-verkehr' },
            ]
          }
        ]
      }
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    search: {
      provider: 'local'
    },
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
