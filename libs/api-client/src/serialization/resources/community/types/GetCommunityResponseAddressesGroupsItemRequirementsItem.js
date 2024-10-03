/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as core from '../../../../core';
import { GetCommunityResponseAddressesGroupsItemRequirementsItemAllow } from './GetCommunityResponseAddressesGroupsItemRequirementsItemAllow';
import { GetCommunityResponseAddressesGroupsItemRequirementsItemThreshold } from './GetCommunityResponseAddressesGroupsItemRequirementsItemThreshold';
export const GetCommunityResponseAddressesGroupsItemRequirementsItem =
  core.serialization
    .union('rule', {
      threshold:
        GetCommunityResponseAddressesGroupsItemRequirementsItemThreshold,
      allow: GetCommunityResponseAddressesGroupsItemRequirementsItemAllow,
    })
    .transform({
      transform: (value) => value,
      untransform: (value) => value,
    });
