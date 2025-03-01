import BaseToolAdapter from './base';
import type { BlockAPI, BlockTune as IBlockTune, BlockTuneConstructable } from '@sse-editor/types';
import type { BlockTuneData } from '@sse-editor/types/block-tunes/block-tune-data';
import type { BlockTuneAdapter as BlockTuneAdapterInterface } from '@sse-editor/types/tools/adapters/block-tune-adapter';
import { ToolType } from '@sse-editor/types/tools/adapters/tool-type';

/**
 * Stub class for BlockTunes
 *
 * @todo Implement
 */
export default class BlockTuneAdapter extends BaseToolAdapter<ToolType.Tune, IBlockTune> implements BlockTuneAdapterInterface {
  /**
   * Tool type — Tune
   */
  public type: ToolType.Tune = ToolType.Tune;

  /**
   * Tool's constructable blueprint
   */
  protected readonly constructable: BlockTuneConstructable;

  /**
   * Constructs new BlockTune instance from constructable
   *
   * @param data - Tune data
   * @param block - Block API object
   */
  public create(data: BlockTuneData, block: BlockAPI): IBlockTune {
    // eslint-disable-next-line new-cap
    return new this.constructable({
      api: this.api,
      config: this.settings,
      block,
      data,
    });
  }
}
