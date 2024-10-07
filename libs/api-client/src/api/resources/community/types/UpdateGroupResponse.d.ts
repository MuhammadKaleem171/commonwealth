/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from "../../../index";
export interface UpdateGroupResponse {
    id?: number;
    communityId?: string;
    metadata?: CommonApi.UpdateGroupResponseMetadata;
    requirements?: CommonApi.UpdateGroupResponseRequirementsItem[];
    isSystemManaged?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
