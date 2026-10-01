import { Organization } from '../../core/models/organization.model';
import { NTM_ORG } from './ntm.config';
import { NLC_ORG } from './nlc.config';

/** Registry of all organizations/sites served by this app, keyed by Organization.id. */
export const ORGANIZATIONS: Record<string, Organization> = {
  [NTM_ORG.id]: NTM_ORG,
  [NLC_ORG.id]: NLC_ORG
};

export const DEFAULT_ORGANIZATION_ID = NTM_ORG.id;

export { NTM_ORG, NLC_ORG };
