from rest_framework import serializers
from .models import Team
from .models import TeamDetails

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = '__all__'

class PostSerializer1(serializers.ModelSerializer):
    class Meta:
        model = TeamDetails
        fields = '__all__'