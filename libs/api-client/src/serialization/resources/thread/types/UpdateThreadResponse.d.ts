/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';
import { UpdateThreadResponseAddress } from './UpdateThreadResponseAddress';
import { UpdateThreadResponseCollaboratorsItem } from './UpdateThreadResponseCollaboratorsItem';
import { UpdateThreadResponseDiscordMeta } from './UpdateThreadResponseDiscordMeta';
import { UpdateThreadResponseLinksItem } from './UpdateThreadResponseLinksItem';
import { UpdateThreadResponseReactionsItem } from './UpdateThreadResponseReactionsItem';
import { UpdateThreadResponseSearch } from './UpdateThreadResponseSearch';
import { UpdateThreadResponseThreadVersionHistoriesItem } from './UpdateThreadResponseThreadVersionHistoriesItem';
import { UpdateThreadResponseTopic } from './UpdateThreadResponseTopic';
export declare const UpdateThreadResponse: core.serialization.ObjectSchema<
  serializers.UpdateThreadResponse.Raw,
  CommonApi.UpdateThreadResponse
>;
export declare namespace UpdateThreadResponse {
  interface Raw {
    id?: number | null;
    address_id: number;
    title: string;
    kind: string;
    stage?: string | null;
    body?: string | null;
    url?: string | null;
    topic_id?: number | null;
    pinned?: boolean | null;
    community_id: string;
    view_count?: number | null;
    links?: UpdateThreadResponseLinksItem.Raw[] | null;
    content_url?: string | null;
    read_only?: boolean | null;
    has_poll?: boolean | null;
    canvas_signed_data?: string | null;
    canvas_msg_id?: string | null;
    created_at?: string | null;
    updated_at?: string | null;
    last_edited?: string | null;
    deleted_at?: string | null;
    last_commented_on?: string | null;
    marked_as_spam_at?: string | null;
    archived_at?: string | null;
    locked_at?: string | null;
    discord_meta?: UpdateThreadResponseDiscordMeta.Raw | null;
    reaction_count?: number | null;
    reaction_weights_sum?: number | null;
    comment_count?: number | null;
    activity_rank_date?: string | null;
    created_by?: string | null;
    profile_name?: string | null;
    search: UpdateThreadResponseSearch.Raw;
    Address?: UpdateThreadResponseAddress.Raw | null;
    topic?: UpdateThreadResponseTopic.Raw | null;
    collaborators?: UpdateThreadResponseCollaboratorsItem.Raw[] | null;
    reactions?: UpdateThreadResponseReactionsItem.Raw[] | null;
    ThreadVersionHistories?:
      | UpdateThreadResponseThreadVersionHistoriesItem.Raw[]
      | null;
  }
}
