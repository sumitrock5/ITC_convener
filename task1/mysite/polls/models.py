from django.db import models


class Team(models.Model):
    team_id = models.CharField(max_length=50)
    team_name = models.CharField(max_length=50)
    team_pic= models.ImageField(upload_to='post_images') 
    def __str__(self):
        return self.team_name


class TeamDetails(models.Model):
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    team_member = models.CharField(max_length=50)
    def __str__(self):
        return self.team_member