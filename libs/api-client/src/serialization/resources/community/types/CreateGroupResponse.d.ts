/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';
import { CreateGroupResponseAddressesItem } from './CreateGroupResponseAddressesItem';
import { CreateGroupResponseBase } from './CreateGroupResponseBase';
import { CreateGroupResponseChainNode } from './CreateGroupResponseChainNode';
import { CreateGroupResponseCommunityStakesItem } from './CreateGroupResponseCommunityStakesItem';
import { CreateGroupResponseCommunityTagsItem } from './CreateGroupResponseCommunityTagsItem';
import { CreateGroupResponseContestManagersItem } from './CreateGroupResponseContestManagersItem';
import { CreateGroupResponseDefaultPage } from './CreateGroupResponseDefaultPage';
import { CreateGroupResponseGroupsItem } from './CreateGroupResponseGroupsItem';
import { CreateGroupResponseHasHomepage } from './CreateGroupResponseHasHomepage';
import { CreateGroupResponseSocialLinksItem } from './CreateGroupResponseSocialLinksItem';
import { CreateGroupResponseTerms } from './CreateGroupResponseTerms';
import { CreateGroupResponseTopicsItem } from './CreateGroupResponseTopicsItem';
import { CreateGroupResponseType } from './CreateGroupResponseType';
export declare const CreateGroupResponse: core.serialization.ObjectSchema<
  serializers.CreateGroupResponse.Raw,
  CommonApi.CreateGroupResponse
>;
export declare namespace CreateGroupResponse {
  interface Raw {
    id?: string | null;
    name?: string | null;
    chain_node_id?: number | null;
    default_symbol?: string | null;
    network?: string | null;
    base?: CreateGroupResponseBase.Raw | null;
    icon_url?: string | null;
    active?: boolean | null;
    type?: CreateGroupResponseType.Raw | null;
    description?: string | null;
    social_links?: CreateGroupResponseSocialLinksItem.Raw[] | null;
    ss58_prefix?: number | null;
    stages_enabled?: boolean | null;
    custom_stages?: string[] | null;
    custom_domain?: string | null;
    block_explorer_ids?: string | null;
    collapsed_on_homepage?: boolean | null;
    default_summary_view?: boolean | null;
    default_page?: CreateGroupResponseDefaultPage.Raw | null;
    has_homepage?: CreateGroupResponseHasHomepage.Raw | null;
    terms?: CreateGroupResponseTerms.Raw | null;
    admin_only_polling?: boolean | null;
    bech32_prefix?: string | null;
    hide_projects?: boolean | null;
    token_name?: string | null;
    ce_verbose?: boolean | null;
    discord_config_id?: number | null;
    category?: unknown | null;
    discord_bot_webhooks_enabled?: boolean | null;
    directory_page_enabled?: boolean | null;
    directory_page_chain_node_id?: number | null;
    namespace?: string | null;
    namespace_address?: string | null;
    redirect?: string | null;
    snapshot_spaces?: string[] | null;
    include_in_digest_email?: boolean | null;
    profile_count?: number | null;
    lifetime_thread_count?: number | null;
    banner_text?: string | null;
    created_at?: string | null;
    updated_at?: string | null;
    Addresses?: CreateGroupResponseAddressesItem.Raw[] | null;
    CommunityStakes?: CreateGroupResponseCommunityStakesItem.Raw[] | null;
    CommunityTags?: CreateGroupResponseCommunityTagsItem.Raw[] | null;
    ChainNode?: CreateGroupResponseChainNode.Raw | null;
    topics?: CreateGroupResponseTopicsItem.Raw[] | null;
    groups?: CreateGroupResponseGroupsItem.Raw[] | null;
    contest_managers?: CreateGroupResponseContestManagersItem.Raw[] | null;
  }
}
