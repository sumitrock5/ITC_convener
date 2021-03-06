# Generated by Django 3.0.7 on 2020-06-18 17:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Team',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('team_id', models.IntegerField()),
                ('team_name', models.CharField(max_length=50)),
                ('team_pic', models.ImageField(upload_to='images/')),
            ],
        ),
        migrations.CreateModel(
            name='TeamDetails',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('team_member', models.CharField(max_length=50)),
                ('team', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='polls.Team')),
            ],
        ),
        migrations.DeleteModel(
            name='Choice',
        ),
        migrations.DeleteModel(
            name='Question',
        ),
    ]
