from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Product

# untuk mengirimkan data berbentuk JSON perlu di serializer dari model nya
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'