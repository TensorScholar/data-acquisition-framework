/**
 * Axiom Data Engine - Main Entry Point
 * 
 * A general-purpose data acquisition framework for multi-linguistic e-commerce
 * data extraction with advanced computational paradigms.
 * 
 * @author Mohammad Atashi (TensorScholar)
 */

import { ExtractionService } from '@/application/services/extraction.service.js';
import { ProductExtractionSpecifications } from '@/core/specifications/extraction.spec.js';
import { URLValueObject } from '@/core/value-objects/url.js';
import { PriceValueObject } from '@/core/value-objects/price.js';
import { RatingValueObject } from '@/core/value-objects/rating.js';
import { Result } from '@/shared/kernel/result.js';

/**
 * Main application class
 */
export class AxiomDataEngine {
  private extractionService: ExtractionService;

  constructor(extractionService: ExtractionService) {
    this.extractionService = extractionService;
  }

  /**
   * Extracts a single product from a URL
   */
  async extractProduct(url: string): Promise<Result<any, Error>> {
    try {
      const result = await this.extractionService.extractProduct(url);
      return result;
    } catch (error) {
      return Result.failure(error as Error);
    }
  }

  /**
   * Extracts multiple products in batch
   */
  async extractBatch(urls: string[]): Promise<Result<any[], Error>> {
    try {
      const result = await this.extractionService.extractBatch(urls);
      return result;
    } catch (error) {
      return Result.failure(error as Error);
    }
  }

  /**
   * Gets extraction statistics
   */
  async getStatistics(): Promise<Result<any, Error>> {
    try {
      const result = await this.extractionService.getStatistics();
      return result;
    } catch (error) {
      return Result.failure(error as Error);
    }
  }
}


/**
 * Export main classes and utilities
 */
export {
  // Core entities
  Product,
  Ingredient,
  MedicalProfile,
  
  // Value objects
  URLValueObject,
  PriceValueObject,
  RatingValueObject,
  
  // Services
  ExtractionService,
  
  // Specifications
  ProductExtractionSpecifications,
  
  // Kernel
  Result,
  Either,
  Option,
  
  // Types
  BrandedTypes,
  TypeGuards
} from './index.js';

/**
 * Default export
 */
export default AxiomDataEngine;
