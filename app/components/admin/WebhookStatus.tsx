import React from 'react';
import type { WebhookStatus as WebhookStatusType } from '~/types';

interface WebhookStatusProps {
  webhookStatus: WebhookStatusType;
}

export default function WebhookStatus({ webhookStatus }: WebhookStatusProps) {
  return (
    <div className="rounded-lg border border-gray-200 p-4">
      <h3 className="mb-2 text-sm font-medium text-gray-500">Square Webhooks</h3>
      <div className="flex items-center">
        <div className={`mr-2 h-3 w-3 rounded-full ${
          webhookStatus.status === 'healthy' ? 'bg-green-500' : 
          webhookStatus.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
        }`}></div>
        <p className="font-medium text-gray-800">
          {webhookStatus.status === 'healthy' ? 'Healthy' : 
           webhookStatus.status === 'warning' ? 'Warning' : 'Error'}
        </p>
      </div>
      <p className="mt-2 text-sm text-gray-600">
        {webhookStatus.message}
      </p>
    </div>
  );
}
