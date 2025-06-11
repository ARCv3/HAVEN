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