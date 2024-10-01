/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
import { CreateGroupResponseCommunityStakesItemStakeTransactionsItemStakeDirection } from "./CreateGroupResponseCommunityStakesItemStakeTransactionsItemStakeDirection";
export declare const CreateGroupResponseCommunityStakesItemStakeTransactionsItem: core.serialization.ObjectSchema<serializers.CreateGroupResponseCommunityStakesItemStakeTransactionsItem.Raw, CommonApi.CreateGroupResponseCommunityStakesItemStakeTransactionsItem>;
export declare namespace CreateGroupResponseCommunityStakesItemStakeTransactionsItem {
    interface Raw {
        transaction_hash: string;
        community_id: string;
        stake_id?: number | null;
        address: string;
        stake_amount: number;
        stake_price?: string | null;
        stake_direction: CreateGroupResponseCommunityStakesItemStakeTransactionsItemStakeDirection.Raw;
        timestamp: number;
    }
}