# Generated by Django 3.0.6 on 2020-05-13 10:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0005_searchhistory_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='searchhistory',
            name='user',
        ),
    ]