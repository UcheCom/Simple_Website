from django.http import JsonResponse

def hello_world(request):
    return JsonResponse({"message": "Hello, Uchenna!"})

def second_endpoint(request):
    return JsonResponse({"data": "Second endpoint response"})