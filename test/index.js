/* jshint -W030 */
'use strict';

import chai from 'chai';
import task from '../src';

const expect = chai.expect;

describe('Task', () => {
  describe('#name', () => {
    it('should be a string', () => {
      expect(task.name).to.be.a('string');
    });
  });

  describe('#description', () => {
    it('should be a string', () => {
      expect(task.name).to.be.a('string');
    });
  });

  describe('#config', () => {
    it('should be an object', () => {
      expect(task.config).to.be.a('object');
    });
  });

  describe('#help', () => {
    it('should be an object', () => {
      expect(task.help).to.be.a('object');
    });
  });

  describe('#fn', () => {
    it('should be a function', () => {
      expect(task.fn).to.be.a('function');
    });
  });
});
