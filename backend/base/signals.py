from django.db.models.signals import pre_save
from django.contrib.auth.models import User 

def user_config(sender, instance, **kwargs):
	user = instance
	# before we save, we will create username from email
	if user.email != '':
		user.username = user.email

pre_save.connect(user_config, sender=User)