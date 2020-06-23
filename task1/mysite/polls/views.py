from .models import Team
from .models import TeamDetails
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import PostSerializer
from .serializers import PostSerializer1

@api_view(['GET', 'POST'])

def details(request,format=None):
    
    if request.method == 'GET':
        teams = Team.objects.all()
        serializer = PostSerializer(teams, many=True)
        return Response(serializer.data)
        

@api_view(['GET', 'POST'])


def teammates(request,teamid,format=None):

    if request.method == 'GET':
        teams = Team.objects.get(team_id=teamid)
        teammembers=teams.teamdetails_set.all()
        serializer = PostSerializer1(teammembers, many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)
        



