/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from "../../../index";
export declare type CreateCommunityResponseCommunityGroupsItemRequirementsItem = CommonApi.CreateCommunityResponseCommunityGroupsItemRequirementsItem.Threshold | CommonApi.CreateCommunityResponseCommunityGroupsItemRequirementsItem.Allow;
export declare namespace CreateCommunityResponseCommunityGroupsItemRequirementsItem {
    interface Threshold extends CommonApi.CreateCommunityResponseCommunityGroupsItemRequirementsItemThreshold {
        rule: "threshold";
    }
    interface Allow extends CommonApi.CreateCommunityResponseCommunityGroupsItemRequirementsItemAllow {
        rule: "allow";
    }
}