/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
import { UpdateCommentResponseThreadLinksItem } from "./UpdateCommentResponseThreadLinksItem";
import { UpdateCommentResponseThreadDiscordMeta } from "./UpdateCommentResponseThreadDiscordMeta";
import { UpdateCommentResponseThreadSearch } from "./UpdateCommentResponseThreadSearch";
import { UpdateCommentResponseThreadAddress } from "./UpdateCommentResponseThreadAddress";
import { UpdateCommentResponseThreadTopic } from "./UpdateCommentResponseThreadTopic";
import { UpdateCommentResponseThreadCollaboratorsItem } from "./UpdateCommentResponseThreadCollaboratorsItem";
import { UpdateCommentResponseThreadReactionsItem } from "./UpdateCommentResponseThreadReactionsItem";
import { UpdateCommentResponseThreadThreadVersionHistoriesItem } from "./UpdateCommentResponseThreadThreadVersionHistoriesItem";
export declare const UpdateCommentResponseThread: core.serialization.ObjectSchema<serializers.UpdateCommentResponseThread.Raw, CommonApi.UpdateCommentResponseThread>;
export declare namespace UpdateCommentResponseThread {
    interface Raw {
        id?: number | null;
        address_id: number;
        title: string;
        kind: string;
        stage: string;
        body?: string | null;
        plaintext?: string | null;
        url?: string | null;
        topic_id?: number | null;
        pinned?: boolean | null;
        community_id: string;
        view_count: number;
        links?: UpdateCommentResponseThreadLinksItem.Raw[] | null;
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
        discord_meta?: UpdateCommentResponseThreadDiscordMeta.Raw | null;
        reaction_count: number;
        reaction_weights_sum: number;
        comment_count: number;
        activity_rank_date?: string | null;
        created_by?: string | null;
        profile_name?: string | null;
        search: UpdateCommentResponseThreadSearch.Raw;
        Address?: UpdateCommentResponseThreadAddress.Raw | null;
        topic?: UpdateCommentResponseThreadTopic.Raw | null;
        collaborators?: UpdateCommentResponseThreadCollaboratorsItem.Raw[] | null;
        reactions?: UpdateCommentResponseThreadReactionsItem.Raw[] | null;
        ThreadVersionHistories?: UpdateCommentResponseThreadThreadVersionHistoriesItem.Raw[] | null;
    }
}
