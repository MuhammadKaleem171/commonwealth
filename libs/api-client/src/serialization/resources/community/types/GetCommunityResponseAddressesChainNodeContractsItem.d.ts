/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';
export declare const GetCommunityResponseAddressesChainNodeContractsItem: core.serialization.ObjectSchema<
  serializers.GetCommunityResponseAddressesChainNodeContractsItem.Raw,
  CommonApi.GetCommunityResponseAddressesChainNodeContractsItem
>;
export declare namespace GetCommunityResponseAddressesChainNodeContractsItem {
  interface Raw {
    id: number;
    address: string;
    chain_node_id: number;
    abi_id?: number | null;
    decimals?: number | null;
    token_name?: string | null;
    symbol?: string | null;
    type: string;
    is_factory?: boolean | null;
    nickname?: string | null;
    created_at?: string | null;
    updated_at?: string | null;
  }
}
