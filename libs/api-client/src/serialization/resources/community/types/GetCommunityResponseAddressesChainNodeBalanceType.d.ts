/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';
export declare const GetCommunityResponseAddressesChainNodeBalanceType: core.serialization.Schema<
  serializers.GetCommunityResponseAddressesChainNodeBalanceType.Raw,
  CommonApi.GetCommunityResponseAddressesChainNodeBalanceType
>;
export declare namespace GetCommunityResponseAddressesChainNodeBalanceType {
  type Raw = 'terra' | 'ethereum' | 'solana' | 'cosmos' | 'near' | 'substrate';
}
