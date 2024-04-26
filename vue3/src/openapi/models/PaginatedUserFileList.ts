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
import type { UserFile } from './UserFile';
import {
    UserFileFromJSON,
    UserFileFromJSONTyped,
    UserFileToJSON,
} from './UserFile';

/**
 * 
 * @export
 * @interface PaginatedUserFileList
 */
export interface PaginatedUserFileList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedUserFileList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedUserFileList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedUserFileList
     */
    previous?: string;
    /**
     * 
     * @type {Array<UserFile>}
     * @memberof PaginatedUserFileList
     */
    results?: Array<UserFile>;
}

/**
 * Check if a given object implements the PaginatedUserFileList interface.
 */
export function instanceOfPaginatedUserFileList(value: object): boolean {
    return true;
}

export function PaginatedUserFileListFromJSON(json: any): PaginatedUserFileList {
    return PaginatedUserFileListFromJSONTyped(json, false);
}

export function PaginatedUserFileListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedUserFileList {
    if (json == null) {
        return json;
    }
    return {
        
        'count': json['count'] == null ? undefined : json['count'],
        'next': json['next'] == null ? undefined : json['next'],
        'previous': json['previous'] == null ? undefined : json['previous'],
        'results': json['results'] == null ? undefined : ((json['results'] as Array<any>).map(UserFileFromJSON)),
    };
}

export function PaginatedUserFileListToJSON(value?: PaginatedUserFileList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'count': value['count'],
        'next': value['next'],
        'previous': value['previous'],
        'results': value['results'] == null ? undefined : ((value['results'] as Array<any>).map(UserFileToJSON)),
    };
}

