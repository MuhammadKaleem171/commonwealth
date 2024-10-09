/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';

export declare const CreateCommentResponseThreadLinksItemSource: core.serialization.Schema<
  serializers.CreateCommentResponseThreadLinksItemSource.Raw,
  CommonApi.CreateCommentResponseThreadLinksItemSource
>;
export declare namespace CreateCommentResponseThreadLinksItemSource {
  type Raw = 'snapshot' | 'proposal' | 'thread' | 'web' | 'template';
}
