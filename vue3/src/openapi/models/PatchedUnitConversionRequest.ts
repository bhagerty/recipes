/* tslint:disable */
/* eslint-disable */
/**
 * Tandoor
 * Tandoor API Docs
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { FoodRequest } from './FoodRequest';
import {
    FoodRequestFromJSON,
    FoodRequestFromJSONTyped,
    FoodRequestToJSON,
} from './FoodRequest';
import type { UnitRequest } from './UnitRequest';
import {
    UnitRequestFromJSON,
    UnitRequestFromJSONTyped,
    UnitRequestToJSON,
} from './UnitRequest';

/**
 * Adds nested create feature
 * @export
 * @interface PatchedUnitConversionRequest
 */
export interface PatchedUnitConversionRequest {
    /**
     * 
     * @type {number}
     * @memberof PatchedUnitConversionRequest
     */
    baseAmount?: number;
    /**
     * 
     * @type {UnitRequest}
     * @memberof PatchedUnitConversionRequest
     */
    baseUnit?: UnitRequest;
    /**
     * 
     * @type {number}
     * @memberof PatchedUnitConversionRequest
     */
    convertedAmount?: number;
    /**
     * 
     * @type {UnitRequest}
     * @memberof PatchedUnitConversionRequest
     */
    convertedUnit?: UnitRequest;
    /**
     * 
     * @type {FoodRequest}
     * @memberof PatchedUnitConversionRequest
     */
    food?: FoodRequest;
    /**
     * 
     * @type {string}
     * @memberof PatchedUnitConversionRequest
     */
    openDataSlug?: string;
    /**
     * 
     * @type {number}
     * @memberof PatchedUnitConversionRequest
     */
    id?: number;
}

/**
 * Check if a given object implements the PatchedUnitConversionRequest interface.
 */
export function instanceOfPatchedUnitConversionRequest(value: object): boolean {
    return true;
}

export function PatchedUnitConversionRequestFromJSON(json: any): PatchedUnitConversionRequest {
    return PatchedUnitConversionRequestFromJSONTyped(json, false);
}

export function PatchedUnitConversionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedUnitConversionRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'baseAmount': json['base_amount'] == null ? undefined : json['base_amount'],
        'baseUnit': json['base_unit'] == null ? undefined : UnitRequestFromJSON(json['base_unit']),
        'convertedAmount': json['converted_amount'] == null ? undefined : json['converted_amount'],
        'convertedUnit': json['converted_unit'] == null ? undefined : UnitRequestFromJSON(json['converted_unit']),
        'food': json['food'] == null ? undefined : FoodRequestFromJSON(json['food']),
        'openDataSlug': json['open_data_slug'] == null ? undefined : json['open_data_slug'],
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function PatchedUnitConversionRequestToJSON(value?: PatchedUnitConversionRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'base_amount': value['baseAmount'],
        'base_unit': UnitRequestToJSON(value['baseUnit']),
        'converted_amount': value['convertedAmount'],
        'converted_unit': UnitRequestToJSON(value['convertedUnit']),
        'food': FoodRequestToJSON(value['food']),
        'open_data_slug': value['openDataSlug'],
        'id': value['id'],
    };
}

