/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
import { CreateGroupResponseContestManagersItemContestsItemActionsItemAction } from "./CreateGroupResponseContestManagersItemContestsItemActionsItemAction";
export declare const CreateGroupResponseContestManagersItemContestsItemActionsItem: core.serialization.ObjectSchema<serializers.CreateGroupResponseContestManagersItemContestsItemActionsItem.Raw, CommonApi.CreateGroupResponseContestManagersItemContestsItemActionsItem>;
export declare namespace CreateGroupResponseContestManagersItemContestsItemActionsItem {
    interface Raw {
        contest_address: string;
        contest_id: number;
        content_id: number;
        actor_address: string;
        action: CreateGroupResponseContestManagersItemContestsItemActionsItemAction.Raw;
        content_url?: string | null;
        thread_id?: number | null;
        thread_title?: string | null;
        voting_power: number;
        created_at: string;
    }
}
