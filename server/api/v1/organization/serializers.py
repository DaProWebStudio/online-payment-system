from rest_framework import serializers
from apps.organization.models import Organization


class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organization
        fields = [
            'title', 'balance', 'api_token', 'is_active', 'created_at', 'modified_at'
        ]
        read_only_fields = ['api_token', 'created_at', 'modified_at']