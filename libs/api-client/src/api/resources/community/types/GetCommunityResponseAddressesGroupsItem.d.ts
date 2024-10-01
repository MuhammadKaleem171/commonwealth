/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from "../../../index";
export interface GetCommunityResponseAddressesGroupsItem {
    id?: number;
    communityId: string;
    metadata: CommonApi.GetCommunityResponseAddressesGroupsItemMetadata;
    requirements: CommonApi.GetCommunityResponseAddressesGroupsItemRequirementsItem[];
    isSystemManaged?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}