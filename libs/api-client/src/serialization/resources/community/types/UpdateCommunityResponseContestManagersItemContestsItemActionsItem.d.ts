/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';
import { UpdateCommunityResponseContestManagersItemContestsItemActionsItemAction } from './UpdateCommunityResponseContestManagersItemContestsItemActionsItemAction';
export declare const UpdateCommunityResponseContestManagersItemContestsItemActionsItem: core.serialization.ObjectSchema<
  serializers.UpdateCommunityResponseContestManagersItemContestsItemActionsItem.Raw,
  CommonApi.UpdateCommunityResponseContestManagersItemContestsItemActionsItem
>;
export declare namespace UpdateCommunityResponseContestManagersItemContestsItemActionsItem {
  interface Raw {
    contest_address: string;
    contest_id: number;
    content_id: number;
    actor_address: string;
    action: UpdateCommunityResponseContestManagersItemContestsItemActionsItemAction.Raw;
    content_url?: string | null;
    thread_id?: number | null;
    thread_title?: string | null;
    voting_power: number;
    created_at: string;
  }
}
