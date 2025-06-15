import { gql } from "@apollo/client";

const GET_PARTNER_CONFIG = gql`
query PartnerConfig($partnerConfigId: Int!) {
  partnerConfig(id: $partnerConfigId) {
    Haven {
      domain {
        customDomainEnabled
        domain
        subdomain
      }
      version
      theme {
        primaryColor
      }
      text {
        navbar {
          navbarTitle
          navbarHome
          navbarInfo
          navbarNews
          navbarHighlights
          navbarJoinButton
        }
        hero {
          heroPrefix
          heroTitle
          heroDescription
          heroJoinButtonText
        }
        info {
          infoHeader
          infoSubheader
          infoSubheaderPlacement
        }
        highlights {
          highlightsHeader
          highlightsSubheader
          highlightsPlacement
        }
        news {
          newsHeader
          newsSubheader
          newsSubheaderPlacement
        }
      }
      content {
        backgroundImage
        enableInfo
        enableDefaultInfo
        customInfo {
          icon
          title
          description
        }
        enableNews
        enableDefaultNews
        customNews {
          image
          date
          title
          description
          content
        }
        enableHighlights
        enableDefaultHighlights
        customHighlights {
          image
          title
          description
          tags
        }
      }
    }
    partner {
      id
      isActive
      name
      premium
    }
  }
}
`

export default GET_PARTNER_CONFIG;