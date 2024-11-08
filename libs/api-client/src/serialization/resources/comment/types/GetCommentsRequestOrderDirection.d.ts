/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';
export declare const GetCommentsRequestOrderDirection: core.serialization.Schema<
  serializers.GetCommentsRequestOrderDirection.Raw,
  CommonApi.GetCommentsRequestOrderDirection
>;
export declare namespace GetCommentsRequestOrderDirection {
  type Raw = 'ASC' | 'DESC';
}
