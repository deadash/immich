/* tslint:disable */
/* eslint-disable */
/**
 * Immich
 * Immich API
 *
 * The version of the OpenAPI document: 1.94.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface SystemConfigNewVersionCheckDto
 */
export interface SystemConfigNewVersionCheckDto {
    /**
     * 
     * @type {boolean}
     * @memberof SystemConfigNewVersionCheckDto
     */
    enabled: boolean;
}

/**
 * Check if a given object implements the SystemConfigNewVersionCheckDto interface.
 */
export function instanceOfSystemConfigNewVersionCheckDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "enabled" in value;

    return isInstance;
}

export function SystemConfigNewVersionCheckDtoFromJSON(json: any): SystemConfigNewVersionCheckDto {
    return SystemConfigNewVersionCheckDtoFromJSONTyped(json, false);
}

export function SystemConfigNewVersionCheckDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemConfigNewVersionCheckDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'enabled': json['enabled'],
    };
}

export function SystemConfigNewVersionCheckDtoToJSON(value?: SystemConfigNewVersionCheckDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'enabled': value.enabled,
    };
}
