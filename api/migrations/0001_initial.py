# Generated by Django 4.1 on 2022-09-12 17:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Room',
            fields=[
                ('roomID', models.IntegerField(primary_key=True, serialize=False, unique=True)),
                ('name', models.CharField(max_length=30)),
                ('description', models.CharField(blank=True, max_length=100, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Object',
            fields=[
                ('objectID', models.IntegerField(primary_key=True, serialize=False, unique=True)),
                ('name', models.CharField(max_length=30)),
                ('description', models.CharField(blank=True, max_length=100, null=True)),
                ('state', models.BooleanField(default=False)),
                ('roomFK', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.room')),
            ],
        ),
    ]
