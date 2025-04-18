import type { BlockAPI, Caret } from '@sse-editor/types/api';
import Module from '../../__module';
import { resolveBlock } from '../../utils/api';

/**
 * @class CaretAPI
 * provides with methods to work with caret
 */
export default class CaretAPI extends Module {
  /**
   * Available methods
   *
   * @returns {Caret}
   */
  public get methods(): Caret {
    return {
      setToFirstBlock: this.setToFirstBlock,
      setToLastBlock: this.setToLastBlock,
      setToPreviousBlock: this.setToPreviousBlock,
      setToNextBlock: this.setToNextBlock,
      setToBlock: this.setToBlock,
      focus: this.focus,
    };
  }

  /**
   * Sets caret to the first Block
   *
   * @param {string} position - position where to set caret
   * @param {number} offset - caret offset
   * @returns {boolean}
   */
  private setToFirstBlock = (position: string = this.Editor.Caret.positions.DEFAULT, offset = 0): boolean => {
    if (!this.Editor.BlockManager.firstBlock) {
      return false;
    }

    this.Editor.Caret.setToBlock(this.Editor.BlockManager.firstBlock, position, offset);

    return true;
  };

  /**
   * Sets caret to the last Block
   *
   * @param {string} position - position where to set caret
   * @param {number} offset - caret offset
   * @returns {boolean}
   */
  private setToLastBlock = (position: string = this.Editor.Caret.positions.DEFAULT, offset = 0): boolean => {
    if (!this.Editor.BlockManager.lastBlock) {
      return false;
    }

    this.Editor.Caret.setToBlock(this.Editor.BlockManager.lastBlock, position, offset);

    return true;
  };

  /**
   * Sets caret to the previous Block
   *
   * @param {string} position - position where to set caret
   * @param {number} offset - caret offset
   * @returns {boolean}
   */
  private setToPreviousBlock = (
    position: string = this.Editor.Caret.positions.DEFAULT,
    offset = 0
  ): boolean => {
    if (!this.Editor.BlockManager.previousBlock) {
      return false;
    }

    this.Editor.Caret.setToBlock(this.Editor.BlockManager.previousBlock, position, offset);

    return true;
  };

  /**
   * Sets caret to the next Block
   *
   * @param {string} position - position where to set caret
   * @param {number} offset - caret offset
   * @returns {boolean}
   */
  private setToNextBlock = (position: string = this.Editor.Caret.positions.DEFAULT, offset = 0): boolean => {
    if (!this.Editor.BlockManager.nextBlock) {
      return false;
    }

    this.Editor.Caret.setToBlock(this.Editor.BlockManager.nextBlock, position, offset);

    return true;
  };

  /**
   * Sets caret to the Block by passed index
   *
   * @param blockOrIdOrIndex - either BlockAPI or Block id or Block index
   * @param position - position where to set caret
   * @param offset - caret offset
   * @returns {boolean}
   */
  private setToBlock = (
    blockOrIdOrIndex: BlockAPI | BlockAPI['id'] | number,
    position: string = this.Editor.Caret.positions.DEFAULT,
    offset = 0
  ): boolean => {
    const block = resolveBlock(blockOrIdOrIndex, this.Editor);

    if (block === undefined) {
      return false;
    }

    this.Editor.Caret.setToBlock(block, position, offset);

    return true;
  };

  /**
   * Sets caret to the Editor
   *
   * @param {boolean} atEnd - if true, set Caret to the end of the Editor
   * @returns {boolean}
   */
  private focus = (atEnd = false): boolean => {
    if (atEnd) {
      return this.setToLastBlock(this.Editor.Caret.positions.END);
    }

    return this.setToFirstBlock(this.Editor.Caret.positions.START);
  };
}
