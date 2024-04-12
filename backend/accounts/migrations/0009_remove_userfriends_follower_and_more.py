# Generated by Django 4.1.1 on 2022-11-18 01:18

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0008_user_people'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userfriends',
            name='follower',
        ),
        migrations.RemoveField(
            model_name='userfriends',
            name='following',
        ),
        migrations.AddField(
            model_name='userfriends',
            name='follower',
            field=models.ManyToManyField(related_name='user_followers', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='userfriends',
            name='following',
            field=models.ManyToManyField(related_name='user_following', to=settings.AUTH_USER_MODEL),
        ),
    ]
