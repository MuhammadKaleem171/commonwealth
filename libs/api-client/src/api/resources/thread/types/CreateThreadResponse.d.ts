/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from "../../../index";
export interface CreateThreadResponse {
    id?: number;
    addressId: number;
    title: string;
    kind: string;
    stage: string;
    body?: string;
    plaintext?: string;
    url?: string;
    topicId?: number;
    pinned?: boolean;
    communityId: string;
    viewCount: number;
    links?: CommonApi.CreateThreadResponseLinksItem[];
    contentUrl?: string;
    readOnly?: boolean;
    hasPoll?: boolean;
    canvasSignedData?: string;
    canvasMsgId?: string;
    createdAt?: Date;
    updatedAt?: Date;
    lastEdited?: Date;
    deletedAt?: Date;
    lastCommentedOn?: Date;
    markedAsSpamAt?: Date;
    archivedAt?: Date;
    lockedAt?: Date;
    discordMeta?: CommonApi.CreateThreadResponseDiscordMeta;
    reactionCount: number;
    reactionWeightsSum: number;
    commentCount: number;
    activityRankDate?: Date;
    createdBy?: string;
    profileName?: string;
    search: CommonApi.CreateThreadResponseSearch;
    address?: CommonApi.CreateThreadResponseAddress;
    topic?: CommonApi.CreateThreadResponseTopic;
    collaborators?: CommonApi.CreateThreadResponseCollaboratorsItem[];
    reactions?: CommonApi.CreateThreadResponseReactionsItem[];
    threadVersionHistories?: CommonApi.CreateThreadResponseThreadVersionHistoriesItem[];
}