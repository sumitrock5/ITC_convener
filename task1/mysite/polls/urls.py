from django.urls import path

from . import views


urlpatterns = [
    
    # url to get the list of the teams
    path('', views.details, name= 'team_list'),

    # url to get the team details of a specific id
    path('<str:teamid>', views.teammates, name= 'team_details'),

    
]