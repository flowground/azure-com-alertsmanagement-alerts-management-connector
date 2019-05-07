/**
 * Auto-generated action file for "Azure Alerts Management Service Resource Provider" API.
 *
 * Generated at: 2019-05-07T14:37:06.732Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / azure-com-alertsmanagement-alerts-management-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'ActionRules_CreateUpdate'
 * Endpoint Path: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AlertsManagement/actionRules/{actionRuleName}'
 * Method: 'put'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "subscriptionId",
    "resourceGroup",
    "actionRuleName"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "subscriptionId": "subscriptionId",
    "resourceGroup": "resourceGroup",
    "actionRuleName": "actionRuleName",
    "operator": "operator",
    "values": "values",
    "alertRuleId": "alertRuleId",
    "applicationInsightsSearchResults": "applicationInsightsSearchResults",
    "description": "description",
    "logAnalyticsSearchResults": "logAnalyticsSearchResults",
    "monitorCondition": "monitorCondition",
    "monitorService": "monitorService",
    "severity": "severity",
    "signalType": "signalType",
    "targetResource": "targetResource",
    "targetResourceGroup": "targetResourceGroup",
    "targetResourceType": "targetResourceType",
    "conditions": "conditions",
    "createdAt": "createdAt",
    "createdBy": "createdBy",
    "lastModifiedAt": "lastModifiedAt",
    "lastModifiedBy": "lastModifiedBy",
    "type": "type",
    "scope": "scope",
    "status": "status",
    "recurrenceType": "recurrenceType",
    "endDate": "endDate",
    "endTime": "endTime",
    "recurrenceValues": "recurrenceValues",
    "startDate": "startDate",
    "startTime": "startTime",
    "schedule": "schedule",
    "suppressionConfig": "suppressionConfig",
    "properties": "properties",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['azure_auth'] = {token: cfg['azure_auth']};

    let callParams = {
        spec: spec,
        operationId: 'ActionRules_CreateUpdate',
        pathName: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AlertsManagement/actionRules/{actionRuleName}',
        method: 'put',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}