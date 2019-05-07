# ![LOGO](logo.png) Azure Alerts Management Service Resource Provider **flow**ground Connector

## Description

A generated **flow**ground connector for the Azure Alerts Management Service Resource Provider API (version 2018-11-02-privatepreview).

Generated from: https://api.apis.guru/v2/specs/azure.com/alertsmanagement-AlertsManagement/2018-11-02-privatepreview/swagger.json<br/>
Generated at: 2019-05-07T17:37:06+03:00

## API Description

REST APIs for Azure Alerts Management Service.

## Authorization

Supported authorization schemes:
- OAuth2

For OAuth 2.0 you need to specify OAuth Client credentials as environment variables in the connector repository:
* `OAUTH_CLIENT_ID` - your OAuth client id
* `OAUTH_CLIENT_SECRET` - your OAuth client secret

## Actions

### List all operations available through Azure Alerts Management Resource Provider.

#### Input Parameters
* `api-version` - _required_ - client API version
    Possible values: 2018-11-02-privatepreview, 2018-05-05.

### Get all action rule in a given subscription

> List all action rules of the subscription and given input filters

#### Input Parameters
* `subscriptionId` - _required_ - subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* `targetResourceGroup` - _optional_ - filter by target resource group name
* `targetResourceType` - _optional_ - filter by target resource type
* `targetResource` - _optional_ - filter by target resource
* `severity` - _optional_ - filter by severity
    Possible values: Sev0, Sev1, Sev2, Sev3, Sev4.
* `monitorService` - _optional_ - filter by monitor service which is the source of the alert object.
    Possible values: Platform, Application Insights, Log Analytics, Zabbix, SCOM, Nagios, Infrastructure Insights, ActivityLog Administrative, ActivityLog Security, ActivityLog Recommendation, ActivityLog Policy, ActivityLog Autoscale, ServiceHealth, SmartDetector.

### List all the existing alerts, where the results can be selective by passing multiple filter parameters including time range and sorted on specific fields.

#### Input Parameters
* `subscriptionId` - _required_ - subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* `targetResource` - _optional_ - filter by target resource
* `targetResourceGroup` - _optional_ - filter by target resource group name
* `targetResourceType` - _optional_ - filter by target resource type
* `monitorService` - _optional_ - filter by monitor service which is the source of the alert object.
    Possible values: Platform, Application Insights, Log Analytics, Zabbix, SCOM, Nagios, Infrastructure Insights, ActivityLog Administrative, ActivityLog Security, ActivityLog Recommendation, ActivityLog Policy, ActivityLog Autoscale, ServiceHealth, SmartDetector.
* `monitorCondition` - _optional_ - filter by monitor condition which is the state of the alert at monitor service
    Possible values: Fired, Resolved.
* `severity` - _optional_ - filter by severity
    Possible values: Sev0, Sev1, Sev2, Sev3, Sev4.
* `alertState` - _optional_ - filter by state
    Possible values: New, Acknowledged, Closed.
* `smartGroupId` - _optional_ - filter by smart Group Id
* `includePayload` - _optional_ - include payload field content, default value is 'false'.
* `pageCount` - _optional_ - number of items per page, default value is '25'.
* `sortBy` - _optional_ - sort the query results by input field, default value is 'lastModifiedDateTime'.
    Possible values: name, severity, alertState, monitorCondition, targetResource, targetResourceName, targetResourceGroup, targetResourceType, startDateTime, lastModifiedDateTime.
* `sortOrder` - _optional_ - sort the query results order in either ascending or descending, default value is 'desc' for time fields and 'asc' for others.
    Possible values: asc, desc.
* `timeRange` - _optional_ - filter by time range, default value is 1 day
    Possible values: 1h, 1d, 7d, 30d.
* `api-version` - _required_ - client API version
    Possible values: 2018-11-02-privatepreview, 2018-05-05.

### Get a specific alert.

> Get information related to a specific alert

#### Input Parameters
* `subscriptionId` - _required_ - subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* `alertId` - _required_ - Unique ID of an alert object.
* `api-version` - _required_ - client API version
    Possible values: 2018-11-02-privatepreview, 2018-05-05.

### Change the state of the alert.

#### Input Parameters
* `subscriptionId` - _required_ - subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* `alertId` - _required_ - Unique ID of an alert object.
* `api-version` - _required_ - client API version
    Possible values: 2018-11-02-privatepreview, 2018-05-05.
* `newState` - _required_ - filter by state
    Possible values: New, Acknowledged, Closed.

### Get the history of the changes of an alert.

#### Input Parameters
* `subscriptionId` - _required_ - subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* `alertId` - _required_ - Unique ID of an alert object.
* `api-version` - _required_ - client API version
    Possible values: 2018-11-02-privatepreview, 2018-05-05.

### Summary of alerts with the count each severity.

#### Input Parameters
* `subscriptionId` - _required_ - subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* `targetResourceGroup` - _optional_ - filter by target resource group name
* `timeRange` - _optional_ - filter by time range, default value is 1 day
    Possible values: 1h, 1d, 7d, 30d.
* `api-version` - _required_ - client API version
    Possible values: 2018-11-02-privatepreview, 2018-05-05.

### Get all smartGroups within the subscription

> List all the smartGroups within the specified subscription.

#### Input Parameters
* `subscriptionId` - _required_ - subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* `targetResource` - _optional_ - filter by target resource
* `targetResourceGroup` - _optional_ - filter by target resource group name
* `targetResourceType` - _optional_ - filter by target resource type
* `monitorService` - _optional_ - filter by monitor service which is the source of the alert object.
    Possible values: Platform, Application Insights, Log Analytics, Zabbix, SCOM, Nagios, Infrastructure Insights, ActivityLog Administrative, ActivityLog Security, ActivityLog Recommendation, ActivityLog Policy, ActivityLog Autoscale, ServiceHealth, SmartDetector.
* `monitorCondition` - _optional_ - filter by monitor condition which is the state of the alert at monitor service
    Possible values: Fired, Resolved.
* `severity` - _optional_ - filter by severity
    Possible values: Sev0, Sev1, Sev2, Sev3, Sev4.
* `smartGroupState` - _optional_ - filter by state
    Possible values: New, Acknowledged, Closed.
* `timeRange` - _optional_ - filter by time range, default value is 1 day
    Possible values: 1h, 1d, 7d, 30d.
* `pageCount` - _optional_ - number of items per page, default value is '25'.
* `sortBy` - _optional_ - sort the query results by input field, default value is 'lastModifiedDateTime'.
    Possible values: alertsCount, state, severity, startDateTime, lastModifiedDateTime.
* `sortOrder` - _optional_ - sort the query results order in either ascending or descending, default value is 'desc' for time fields and 'asc' for others.
    Possible values: asc, desc.
* `api-version` - _required_ - client API version
    Possible values: 2018-11-02-privatepreview, 2018-05-05.

### Get information of smart alerts group.

> Get details of smart group.

#### Input Parameters
* `subscriptionId` - _required_ - subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* `smartGroupId` - _required_ - Smart Group Id
* `api-version` - _required_ - client API version
    Possible values: 2018-11-02-privatepreview, 2018-05-05.

### Change the state from unresolved to resolved and all the alerts within the smart group will also be resolved.

#### Input Parameters
* `subscriptionId` - _required_ - subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* `smartGroupId` - _required_ - Smart Group Id
* `api-version` - _required_ - client API version
    Possible values: 2018-11-02-privatepreview, 2018-05-05.
* `newState` - _required_ - filter by state
    Possible values: New, Acknowledged, Closed.

### Get the history of the changes of smart group.

#### Input Parameters
* `subscriptionId` - _required_ - subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* `smartGroupId` - _required_ - Smart Group Id
* `api-version` - _required_ - client API version
    Possible values: 2018-11-02-privatepreview, 2018-05-05.

### Get all action rules created in a resource group

> List all action rules of the subscription, created in given resource group and given input filters

#### Input Parameters
* `subscriptionId` - _required_ - subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* `resourceGroup` - _required_ - Resource group name where the resource is created.
* `targetResourceGroup` - _optional_ - filter by target resource group name
* `targetResourceType` - _optional_ - filter by target resource type
* `targetResource` - _optional_ - filter by target resource
* `severity` - _optional_ - filter by severity
    Possible values: Sev0, Sev1, Sev2, Sev3, Sev4.
* `monitorService` - _optional_ - filter by monitor service which is the source of the alert object.
    Possible values: Platform, Application Insights, Log Analytics, Zabbix, SCOM, Nagios, Infrastructure Insights, ActivityLog Administrative, ActivityLog Security, ActivityLog Recommendation, ActivityLog Policy, ActivityLog Autoscale, ServiceHealth, SmartDetector.

### Delete action rule

> Deletes a given action rule

#### Input Parameters
* `subscriptionId` - _required_ - subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* `resourceGroup` - _required_ - Resource group name where the resource is created.
* `actionRuleName` - _required_ - The name that needs to be deleted

### Get action rule by name

> Get a specific action rule

#### Input Parameters
* `subscriptionId` - _required_ - subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* `resourceGroup` - _required_ - Resource group name where the resource is created.
* `actionRuleName` - _required_ - The name of action rule that needs to be fetched

### Patch action rule

> Update enabled flag and/or tags for the given action rule

#### Input Parameters
* `subscriptionId` - _required_ - subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* `resourceGroup` - _required_ - Resource group name where the resource is created.
* `actionRuleName` - _required_ - The name that needs to be updated

### Create/update an action rule

> Creates/Updates a specific action rule

#### Input Parameters
* `subscriptionId` - _required_ - subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* `resourceGroup` - _required_ - Resource group name where the resource is created.
* `actionRuleName` - _required_ - The name of action rule that needs to be created/updated

## License

**flow**ground :- Telekom iPaaS / azure-com-alertsmanagement-alerts-management-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
